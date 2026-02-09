import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export default async function RubricsPage() {
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: rubrics }: {
    data: Array<{
      id: string;
      name: string;
      description: string | null;
      is_active: boolean;
      created_at: string;
      boat_classes: { name: string; skill_level: string } | null;
    }> | null;
  } = await db
    .from("rubrics")
    .select(`
      id,
      name,
      description,
      is_active,
      created_at,
      boat_classes (name, skill_level)
    `)
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Rubrics</h1>
          <p className="text-muted-foreground">
            Skill progression rubrics for each boat class
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/rubrics/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Rubric
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/rubrics/create-with-ai">
              <Sparkles className="w-4 h-4 mr-2" />
              Create with AI
            </Link>
          </Button>
        </div>
      </div>

      {!rubrics || rubrics.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-12">
            <ClipboardList className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <CardTitle>No rubrics yet</CardTitle>
            <CardDescription>
              Create your first rubric to define skill progression for a boat
              class. You can create one manually or chat with Puff to build one
              with AI.
            </CardDescription>
            <div className="flex gap-2 justify-center mt-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard/rubrics/new">Create Manually</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard/rubrics/create-with-ai">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Create with AI
                </Link>
              </Button>
            </div>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rubrics.map((rubric) => {
            const boatClass = rubric.boat_classes;
            return (
              <Link key={rubric.id} href={`/dashboard/rubrics/${rubric.id}`}>
                <Card className="hover:border-primary/30 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant={rubric.is_active ? "default" : "secondary"}>
                        {rubric.is_active ? "Active" : "Inactive"}
                      </Badge>
                      {boatClass && (
                        <Badge variant="outline">{boatClass.name}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{rubric.name}</CardTitle>
                    {rubric.description && (
                      <CardDescription>{rubric.description}</CardDescription>
                    )}
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
