"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BoatClass {
  id: string;
  name: string;
}

interface CriterionInput {
  name: string;
  description: string;
  level_required: "developing" | "proficient" | "advanced";
}

export default function NewRubricPage() {
  const router = useRouter();
  const [boatClasses, setBoatClasses] = useState<BoatClass[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [boatClassId, setBoatClassId] = useState("");
  const [criteria, setCriteria] = useState<CriterionInput[]>([
    { name: "", description: "", level_required: "proficient" },
  ]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    supabase
      .from("boat_classes")
      .select("id, name")
      .then(({ data }: { data: BoatClass[] | null }) => {
        if (data) setBoatClasses(data);
      });
  }, []);

  const addCriterion = () => {
    setCriteria([
      ...criteria,
      { name: "", description: "", level_required: "proficient" },
    ]);
  };

  const removeCriterion = (index: number) => {
    setCriteria(criteria.filter((_, i) => i !== index));
  };

  const updateCriterion = (
    index: number,
    field: keyof CriterionInput,
    value: string
  ) => {
    const updated = [...criteria];
    updated[index] = { ...updated[index], [field]: value };
    setCriteria(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setError("Not authenticated");
      setSaving(false);
      return;
    }

    // Get user's team_id
    const { data: profile } = await supabase
      .from("profiles")
      .select("team_id")
      .eq("id", user.id)
      .single();

    if (!profile?.team_id) {
      setError("No team found");
      setSaving(false);
      return;
    }

    // Create rubric
    const { data: rubric, error: rubricError } = await supabase
      .from("rubrics")
      .insert({
        team_id: profile.team_id,
        boat_class_id: boatClassId,
        name,
        description: description || null,
        created_by: user.id,
      })
      .select("id")
      .single();

    if (rubricError || !rubric) {
      setError(rubricError?.message || "Failed to create rubric");
      setSaving(false);
      return;
    }

    // Create criteria
    const validCriteria = criteria.filter((c) => c.name.trim());
    if (validCriteria.length > 0) {
      const { error: criteriaError } = await supabase
        .from("rubric_criteria")
        .insert(
          validCriteria.map((c, i) => ({
            rubric_id: rubric.id,
            name: c.name,
            description: c.description || null,
            sort_order: i,
            level_required: c.level_required,
          }))
        );

      if (criteriaError) {
        setError(criteriaError.message);
        setSaving(false);
        return;
      }
    }

    router.push(`/dashboard/rubrics/${rubric.id}`);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">Create Rubric</h1>
      <p className="text-muted-foreground mb-8">
        Define the skills needed to advance in a boat class
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
            {error}
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rubric Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Rubric Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Opti Level 2 Skills"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Skills needed to advance from Opti Level 1 to Level 2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="boat-class">Boat Class</Label>
              <select
                id="boat-class"
                value={boatClassId}
                onChange={(e) => setBoatClassId(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              >
                <option value="">Select a boat class</option>
                {boatClasses.map((bc) => (
                  <option key={bc.id} value={bc.id}>
                    {bc.name}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Criteria</CardTitle>
            <CardDescription>
              Add the skills and competencies sailors need to demonstrate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-3 relative"
              >
                {criteria.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCriterion(index)}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <div className="space-y-2">
                  <Label>Skill Name</Label>
                  <Input
                    value={criterion.name}
                    onChange={(e) =>
                      updateCriterion(index, "name", e.target.value)
                    }
                    placeholder="e.g. Tacking, Roll Tack, Upwind VMG"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input
                    value={criterion.description}
                    onChange={(e) =>
                      updateCriterion(index, "description", e.target.value)
                    }
                    placeholder="What does this skill look like when mastered?"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Level Required</Label>
                  <select
                    value={criterion.level_required}
                    onChange={(e) =>
                      updateCriterion(index, "level_required", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="developing">Developing</option>
                    <option value="proficient">Proficient</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addCriterion}>
              <Plus className="w-4 h-4 mr-2" />
              Add Criterion
            </Button>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button type="submit" disabled={saving}>
            {saving ? "Creating..." : "Create Rubric"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
