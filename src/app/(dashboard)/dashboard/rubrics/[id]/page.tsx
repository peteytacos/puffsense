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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RubricDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: rubric } = await db
    .from("rubrics")
    .select(`
      id,
      name,
      description,
      is_active,
      created_at,
      boat_classes (name, skill_level)
    `)
    .eq("id", id)
    .single();

  if (!rubric) {
    notFound();
  }

  const { data: criteria } = await db
    .from("rubric_criteria")
    .select("*")
    .eq("rubric_id", id)
    .order("sort_order", { ascending: true }) as {
    data: Array<{
      id: string;
      name: string;
      description: string | null;
      level_required: string;
      sort_order: number;
    }> | null;
  };

  const boatClass = rubric.boat_classes as {
    name: string;
    skill_level: string;
  } | null;

  const levelColors: Record<string, string> = {
    developing: "bg-yellow-100 text-yellow-800",
    proficient: "bg-blue-100 text-blue-800",
    advanced: "bg-green-100 text-green-800",
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/rubrics">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rubrics
          </Link>
        </Button>
      </div>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{rubric.name}</h1>
          {rubric.description && (
            <p className="text-muted-foreground mt-1">{rubric.description}</p>
          )}
          <div className="flex gap-2 mt-3">
            <Badge variant={rubric.is_active ? "default" : "secondary"}>
              {rubric.is_active ? "Active" : "Inactive"}
            </Badge>
            {boatClass && <Badge variant="outline">{boatClass.name}</Badge>}
            {boatClass && (
              <Badge variant="outline" className="capitalize">
                {boatClass.skill_level}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Criteria</CardTitle>
          <CardDescription>
            Skills and competencies in this rubric
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!criteria || criteria.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No criteria defined yet.
            </p>
          ) : (
            <div className="space-y-3">
              {criteria.map((criterion, index) => (
                <div
                  key={criterion.id}
                  className="flex items-start gap-4 p-4 border rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{criterion.name}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${levelColors[criterion.level_required] || ""}`}
                      >
                        {criterion.level_required}
                      </span>
                    </div>
                    {criterion.description && (
                      <p className="text-sm text-muted-foreground">
                        {criterion.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
