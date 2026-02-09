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
import { ArrowLeft, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SailorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: sailor } = await db
    .from("sailor_profiles")
    .select(`
      id,
      date_of_birth,
      profiles!sailor_profiles_profile_id_fkey (full_name, email),
      boat_classes (id, name, skill_level)
    `)
    .eq("id", id)
    .single();

  if (!sailor) {
    notFound();
  }

  const profile = sailor.profiles as {
    full_name: string;
    email: string;
  } | null;
  const boatClass = sailor.boat_classes as {
    id: string;
    name: string;
    skill_level: string;
  } | null;

  // Get rubrics for this boat class
  let rubrics: Array<{
    id: string;
    name: string;
    is_active: boolean;
    rubric_criteria: Array<{ id: string; name: string; level_required: string }>;
  }> = [];

  if (boatClass) {
    const { data } = await db
      .from("rubrics")
      .select(`
        id,
        name,
        is_active,
        rubric_criteria (id, name, level_required, sort_order)
      `)
      .eq("boat_class_id", boatClass.id)
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (data) {
      rubrics = data as typeof rubrics;
    }
  }

  // Get latest evaluation scores for this sailor
  const { data: latestEvaluations } = await db
    .from("evaluations")
    .select(`
      id,
      overall_notes,
      created_at,
      evaluation_scores (
        rubric_criteria_id,
        score,
        notes
      )
    `)
    .eq("sailor_id", id)
    .order("created_at", { ascending: false })
    .limit(1);

  const latestScores = new Map<string, string>();
  if (latestEvaluations?.[0]?.evaluation_scores) {
    const scores = latestEvaluations[0].evaluation_scores as Array<{
      rubric_criteria_id: string;
      score: string;
    }>;
    for (const score of scores) {
      latestScores.set(score.rubric_criteria_id, score.score);
    }
  }

  const scoreColors: Record<string, string> = {
    not_started: "bg-muted text-muted-foreground",
    developing: "bg-amber-500/15 text-amber-400",
    proficient: "bg-primary/15 text-primary",
    advanced: "bg-emerald-500/15 text-emerald-400",
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
          <Link href="/dashboard/sailors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sailors
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {profile?.full_name || "Unknown Sailor"}
        </h1>
        <p className="text-muted-foreground">{profile?.email}</p>
        <div className="flex gap-2 mt-3">
          {boatClass && <Badge variant="outline">{boatClass.name}</Badge>}
          {boatClass && (
            <Badge variant="secondary" className="capitalize">
              {boatClass.skill_level}
            </Badge>
          )}
        </div>
      </div>

      {/* Rubric Progress */}
      <h2 className="text-lg font-semibold mb-4">Rubric Progress</h2>
      {rubrics.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-8">
            <Target className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <CardTitle className="text-base">No rubrics yet</CardTitle>
            <CardDescription>
              {boatClass
                ? `No active rubrics found for ${boatClass.name}. Create one to start tracking progress.`
                : "Assign a boat class to see available rubrics."}
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-6">
          {rubrics.map((rubric) => (
            <Card key={rubric.id}>
              <CardHeader>
                <CardTitle className="text-lg">{rubric.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rubric.rubric_criteria.map((criterion) => {
                    const score = latestScores.get(criterion.id) || "not_started";
                    return (
                      <div
                        key={criterion.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-sm">{criterion.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">
                            Required: {criterion.level_required}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${scoreColors[score]}`}
                        >
                          {scoreLabels[score]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
