"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface EvaluationInput {
  sailorId: string;
  scores: Array<{
    criteriaId: string;
    score: string;
    notes: string;
  }>;
  overallNotes: string;
}

export async function createSession(data: {
  boatClassId: string;
  date: string;
  windSpeedKnots: number | null;
  windDirection: string;
  weatherConditions: string;
  waterConditions: string;
  notes: string;
  evaluations: EvaluationInput[];
}) {
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    return { error: "Service unavailable. Please try again later." };
  }

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "Not authenticated" };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  // Get user's team_id
  const { data: profile } = await db
    .from("profiles")
    .select("team_id")
    .eq("id", user.id)
    .single();

  if (!profile?.team_id) {
    return { error: "No team found" };
  }

  // Create the session
  const { data: session, error: sessionError } = await db
    .from("sessions")
    .insert({
      team_id: profile.team_id,
      coach_id: user.id,
      boat_class_id: data.boatClassId,
      date: data.date,
      wind_speed_knots: data.windSpeedKnots,
      wind_direction: data.windDirection || null,
      weather_conditions: data.weatherConditions || null,
      water_conditions: data.waterConditions || null,
      notes: data.notes || null,
    })
    .select("id")
    .single();

  if (sessionError || !session) {
    return { error: sessionError?.message || "Failed to create session" };
  }

  // Create evaluations and scores for each sailor
  for (const evaluation of data.evaluations) {
    const { data: evalRow, error: evalError } = await db
      .from("evaluations")
      .insert({
        session_id: session.id,
        sailor_id: evaluation.sailorId,
        coach_id: user.id,
        overall_notes: evaluation.overallNotes || null,
      })
      .select("id")
      .single();

    if (evalError || !evalRow) {
      continue;
    }

    // Insert scores
    const validScores = evaluation.scores.filter(
      (s) => s.score && s.score !== "not_started"
    );

    if (validScores.length > 0) {
      await db.from("evaluation_scores").insert(
        validScores.map((s) => ({
          evaluation_id: evalRow.id,
          rubric_criteria_id: s.criteriaId,
          score: s.score,
          notes: s.notes || null,
        }))
      );
    }
  }

  redirect(`/dashboard/sessions/${session.id}`);
}
