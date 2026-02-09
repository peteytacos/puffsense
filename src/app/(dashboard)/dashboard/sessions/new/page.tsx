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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createSession } from "../actions";

interface BoatClass {
  id: string;
  name: string;
}

interface Sailor {
  id: string;
  name: string;
}

interface Criterion {
  id: string;
  name: string;
  level_required: string;
}

interface SailorEvaluation {
  sailorId: string;
  sailorName: string;
  scores: Array<{
    criteriaId: string;
    criteriaName: string;
    score: string;
    notes: string;
  }>;
  overallNotes: string;
}

export default function NewSessionPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Session details
  const [boatClasses, setBoatClasses] = useState<BoatClass[]>([]);
  const [boatClassId, setBoatClassId] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [weatherConditions, setWeatherConditions] = useState("");
  const [waterConditions, setWaterConditions] = useState("");
  const [notes, setNotes] = useState("");

  // Step 2: Select sailors
  const [sailors, setSailors] = useState<Sailor[]>([]);
  const [selectedSailorIds, setSelectedSailorIds] = useState<Set<string>>(
    new Set()
  );

  // Step 3: Evaluations
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [evaluations, setEvaluations] = useState<SailorEvaluation[]>([]);

  // Load boat classes on mount
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

  // Load sailors when boat class changes
  useEffect(() => {
    if (!boatClassId) {
      setSailors([]);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    supabase
      .from("sailor_profiles")
      .select(
        "id, profiles!sailor_profiles_profile_id_fkey (full_name)"
      )
      .eq("current_boat_class_id", boatClassId)
      .then(
        ({
          data,
        }: {
          data: Array<{
            id: string;
            profiles: { full_name: string } | null;
          }> | null;
        }) => {
          if (data) {
            setSailors(
              data.map((s) => ({
                id: s.id,
                name: s.profiles?.full_name || "Unknown",
              }))
            );
          }
        }
      );

    // Load rubric criteria for this boat class
    supabase
      .from("rubric_criteria")
      .select("id, name, level_required, rubrics!inner(boat_class_id, is_active)")
      .eq("rubrics.boat_class_id", boatClassId)
      .eq("rubrics.is_active", true)
      .order("sort_order", { ascending: true })
      .then(
        ({
          data,
        }: {
          data: Array<{
            id: string;
            name: string;
            level_required: string;
          }> | null;
        }) => {
          if (data) setCriteria(data);
        }
      );
  }, [boatClassId]);

  const toggleSailor = (sailorId: string) => {
    setSelectedSailorIds((prev) => {
      const next = new Set(prev);
      if (next.has(sailorId)) {
        next.delete(sailorId);
      } else {
        next.add(sailorId);
      }
      return next;
    });
  };

  const goToStep3 = () => {
    // Build evaluation forms for selected sailors
    const selected = sailors.filter((s) => selectedSailorIds.has(s.id));
    setEvaluations(
      selected.map((s) => ({
        sailorId: s.id,
        sailorName: s.name,
        scores: criteria.map((c) => ({
          criteriaId: c.id,
          criteriaName: c.name,
          score: "not_started",
          notes: "",
        })),
        overallNotes: "",
      }))
    );
    setStep(3);
  };

  const updateScore = (
    sailorIndex: number,
    criteriaIndex: number,
    score: string
  ) => {
    setEvaluations((prev) => {
      const next = [...prev];
      next[sailorIndex] = {
        ...next[sailorIndex],
        scores: [...next[sailorIndex].scores],
      };
      next[sailorIndex].scores[criteriaIndex] = {
        ...next[sailorIndex].scores[criteriaIndex],
        score,
      };
      return next;
    });
  };

  const updateOverallNotes = (sailorIndex: number, notes: string) => {
    setEvaluations((prev) => {
      const next = [...prev];
      next[sailorIndex] = { ...next[sailorIndex], overallNotes: notes };
      return next;
    });
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError("");

    const result = await createSession({
      boatClassId,
      date,
      windSpeedKnots: windSpeed ? parseInt(windSpeed) : null,
      windDirection,
      weatherConditions,
      waterConditions,
      notes,
      evaluations: evaluations.map((e) => ({
        sailorId: e.sailorId,
        scores: e.scores,
        overallNotes: e.overallNotes,
      })),
    });

    if (result?.error) {
      setError(result.error);
      setSaving(false);
    }
    // On success, the server action redirects
  };

  const selectClassName =
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Log Session
      </h1>
      <p className="text-muted-foreground mb-8">
        Record an on-water session and evaluate sailors
      </p>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                step >= s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-px ${step > s ? "bg-primary" : "bg-border"}`}
              />
            )}
          </div>
        ))}
        <span className="text-xs text-muted-foreground ml-2">
          {step === 1
            ? "Session Details"
            : step === 2
              ? "Select Sailors"
              : "Evaluate"}
        </span>
      </div>

      {/* Step 1: Session Details */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Session Details</CardTitle>
            <CardDescription>
              Record the conditions and basic info for this session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="boat-class">Boat Class</Label>
                <select
                  id="boat-class"
                  value={boatClassId}
                  onChange={(e) => setBoatClassId(e.target.value)}
                  className={selectClassName}
                  required
                >
                  <option value="">Select boat class</option>
                  {boatClasses.map((bc) => (
                    <option key={bc.id} value={bc.id}>
                      {bc.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wind-speed">Wind Speed (kts)</Label>
                <Input
                  id="wind-speed"
                  type="number"
                  value={windSpeed}
                  onChange={(e) => setWindSpeed(e.target.value)}
                  placeholder="e.g. 12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wind-direction">Wind Direction</Label>
                <Input
                  id="wind-direction"
                  value={windDirection}
                  onChange={(e) => setWindDirection(e.target.value)}
                  placeholder="e.g. NW"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weather">Weather</Label>
                <Input
                  id="weather"
                  value={weatherConditions}
                  onChange={(e) => setWeatherConditions(e.target.value)}
                  placeholder="e.g. Sunny, partly cloudy"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="water">Water Conditions</Label>
                <Input
                  id="water"
                  value={waterConditions}
                  onChange={(e) => setWaterConditions(e.target.value)}
                  placeholder="e.g. Flat, small chop"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Session Notes</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Overall session notes, drills practiced, focus areas..."
                rows={3}
              />
            </div>
            <div className="flex justify-end pt-2">
              <Button
                onClick={() => setStep(2)}
                disabled={!boatClassId || !date}
              >
                Next: Select Sailors
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Sailors */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Sailors</CardTitle>
            <CardDescription>
              Choose which sailors to evaluate in this session
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sailors.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">
                No sailors found for this boat class. Add sailors first.
              </p>
            ) : (
              <div className="space-y-2">
                {sailors.map((sailor) => (
                  <label
                    key={sailor.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSailorIds.has(sailor.id)}
                      onChange={() => toggleSailor(sailor.id)}
                      className="rounded border-input"
                    />
                    <span className="text-sm font-medium">{sailor.name}</span>
                  </label>
                ))}
              </div>
            )}
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                onClick={goToStep3}
                disabled={selectedSailorIds.size === 0}
              >
                Next: Evaluate ({selectedSailorIds.size} sailor
                {selectedSailorIds.size !== 1 ? "s" : ""})
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Evaluate Sailors */}
      {step === 3 && (
        <div className="space-y-6">
          {evaluations.map((evaluation, sailorIndex) => (
            <Card key={evaluation.sailorId}>
              <CardHeader>
                <CardTitle className="text-base">
                  {evaluation.sailorName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {evaluation.scores.length > 0 ? (
                  evaluation.scores.map((score, criteriaIndex) => (
                    <div
                      key={score.criteriaId}
                      className="flex items-center justify-between gap-4 p-3 border rounded-lg"
                    >
                      <span className="text-sm font-medium min-w-0 flex-1">
                        {score.criteriaName}
                      </span>
                      <select
                        value={score.score}
                        onChange={(e) =>
                          updateScore(sailorIndex, criteriaIndex, e.target.value)
                        }
                        className="h-8 rounded-md border border-input bg-transparent px-2 text-xs shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="not_started">Not Started</option>
                        <option value="developing">Developing</option>
                        <option value="proficient">Proficient</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No rubric criteria found for this boat class. Create a rubric
                    first.
                  </p>
                )}
                <div className="space-y-2 pt-2">
                  <Label className="text-xs">Notes for {evaluation.sailorName}</Label>
                  <Textarea
                    value={evaluation.overallNotes}
                    onChange={(e) =>
                      updateOverallNotes(sailorIndex, e.target.value)
                    }
                    placeholder="Individual notes..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={saving}>
              {saving ? "Saving..." : "Save Session"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
