import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Wind, Droplets, Cloud } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SessionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: session } = await db
    .from("sessions")
    .select(`
      id,
      date,
      wind_speed_knots,
      wind_direction,
      weather_conditions,
      water_conditions,
      notes,
      created_at,
      profiles!sessions_coach_id_fkey (full_name),
      boat_classes (name)
    `)
    .eq("id", id)
    .single();

  if (!session) {
    notFound();
  }

  // Get evaluations for this session
  const { data: evaluations } = await db
    .from("evaluations")
    .select(`
      id,
      overall_notes,
      sailor_profiles!evaluations_sailor_id_fkey (
        id,
        profiles!sailor_profiles_profile_id_fkey (full_name)
      ),
      evaluation_scores (
        rubric_criteria_id,
        score,
        notes,
        rubric_criteria (name)
      )
    `)
    .eq("session_id", id)
    .order("created_at", { ascending: true });

  const coach = session.profiles as { full_name: string } | null;
  const boatClass = session.boat_classes as { name: string } | null;

  const scoreColors: Record<string, string> = {
    not_started: "bg-muted text-muted-foreground",
    developing: "bg-amber-500/15 text-amber-600",
    proficient: "bg-primary/15 text-primary",
    advanced: "bg-emerald-500/15 text-emerald-600",
  };

  const scoreLabels: Record<string, string> = {
    not_started: "Not Started",
    developing: "Developing",
    proficient: "Proficient",
    advanced: "Advanced",
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/sessions">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sessions
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {new Date(session.date).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h1>
        <p className="text-muted-foreground mt-1">
          Coach: {coach?.full_name || "Unknown"}
        </p>
        <div className="flex gap-2 mt-3">
          {boatClass && <Badge variant="outline">{boatClass.name}</Badge>}
        </div>
      </div>

      {/* Conditions */}
      {(session.wind_speed_knots || session.weather_conditions || session.water_conditions) && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 text-sm">
              {session.wind_speed_knots && (
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-muted-foreground" />
                  <span>
                    {session.wind_speed_knots} kts
                    {session.wind_direction && ` ${session.wind_direction}`}
                  </span>
                </div>
              )}
              {session.weather_conditions && (
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-muted-foreground" />
                  <span>{session.weather_conditions}</span>
                </div>
              )}
              {session.water_conditions && (
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-muted-foreground" />
                  <span>{session.water_conditions}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Session notes */}
      {session.notes && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Session Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{session.notes}</p>
          </CardContent>
        </Card>
      )}

      {/* Evaluations */}
      <h2 className="text-lg font-semibold mb-4">Evaluations</h2>
      {!evaluations || evaluations.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-8">
            <CardTitle className="text-base">No evaluations</CardTitle>
            <CardDescription>
              No sailors were evaluated in this session.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-4">
          {evaluations.map((evaluation: {
            id: string;
            overall_notes: string | null;
            sailor_profiles: {
              id: string;
              profiles: { full_name: string } | null;
            } | null;
            evaluation_scores: Array<{
              rubric_criteria_id: string;
              score: string;
              notes: string | null;
              rubric_criteria: { name: string } | null;
            }>;
          }) => {
            const sailorProfile = evaluation.sailor_profiles;
            const sailorName =
              sailorProfile?.profiles?.full_name || "Unknown Sailor";

            return (
              <Card key={evaluation.id}>
                <CardHeader>
                  <CardTitle className="text-base">{sailorName}</CardTitle>
                  {evaluation.overall_notes && (
                    <CardDescription>{evaluation.overall_notes}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {evaluation.evaluation_scores.length > 0 ? (
                    <div className="space-y-2">
                      {evaluation.evaluation_scores.map((es, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-sm">
                              {es.rubric_criteria?.name || "Unknown Criteria"}
                            </p>
                            {es.notes && (
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {es.notes}
                              </p>
                            )}
                          </div>
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${scoreColors[es.score] || ""}`}
                          >
                            {scoreLabels[es.score] || es.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No scores recorded.
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
