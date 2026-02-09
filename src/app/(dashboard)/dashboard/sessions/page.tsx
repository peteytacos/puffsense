import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Wind, Droplets } from "lucide-react";
import Link from "next/link";

export default async function SessionsPage() {
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: sessions }: {
    data: Array<{
      id: string;
      date: string;
      wind_speed_knots: number | null;
      wind_direction: string | null;
      weather_conditions: string | null;
      water_conditions: string | null;
      notes: string | null;
      created_at: string;
      profiles: { full_name: string } | null;
      boat_classes: { name: string } | null;
    }> | null;
  } = await db
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
    .order("date", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Sessions</h1>
          <p className="text-muted-foreground">
            On-water coaching sessions and evaluations
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/sessions/new">
            <Plus className="w-4 h-4 mr-2" />
            Log Session
          </Link>
        </Button>
      </div>

      {!sessions || sessions.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <CardTitle>No sessions yet</CardTitle>
            <CardDescription>
              Log your first on-water session to start tracking sailor progress.
            </CardDescription>
            <div className="mt-4">
              <Button asChild>
                <Link href="/dashboard/sessions/new">Log Session</Link>
              </Button>
            </div>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-3">
          {sessions.map((session) => (
            <Link key={session.id} href={`/dashboard/sessions/${session.id}`}>
              <Card className="hover:border-primary/30 transition-colors cursor-pointer">
                <CardHeader className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">
                        {new Date(session.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {session.profiles?.full_name || "Unknown coach"}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {session.boat_classes && (
                        <Badge variant="outline">
                          {session.boat_classes.name}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {(session.wind_speed_knots || session.water_conditions) && (
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      {session.wind_speed_knots && (
                        <span className="flex items-center gap-1">
                          <Wind className="w-3 h-3" />
                          {session.wind_speed_knots} kts
                          {session.wind_direction && ` ${session.wind_direction}`}
                        </span>
                      )}
                      {session.water_conditions && (
                        <span className="flex items-center gap-1">
                          <Droplets className="w-3 h-3" />
                          {session.water_conditions}
                        </span>
                      )}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
