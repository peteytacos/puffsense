import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sailboat, Plus } from "lucide-react";
import Link from "next/link";

export default async function SailorsPage() {
  const supabase = await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: sailors }: {
    data: Array<{
      id: string;
      date_of_birth: string | null;
      created_at: string;
      profiles: { full_name: string; email: string } | null;
      boat_classes: { name: string; skill_level: string } | null;
    }> | null;
  } = await db
    .from("sailor_profiles")
    .select(`
      id,
      date_of_birth,
      created_at,
      profiles!sailor_profiles_profile_id_fkey (full_name, email),
      boat_classes (name, skill_level)
    `)
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Sailors</h1>
          <p className="text-muted-foreground">
            All sailors in your program
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard/sailors/new">
            <Plus className="w-4 h-4 mr-2" />
            Add Sailor
          </Link>
        </Button>
      </div>

      {!sailors || sailors.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-12">
            <Sailboat className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <CardTitle>No sailors yet</CardTitle>
            <CardDescription>
              Add your first sailor to start tracking their progress.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sailors.map((sailor) => {
            const profile = sailor.profiles;
            const boatClass = sailor.boat_classes;
            return (
              <Link
                key={sailor.id}
                href={`/dashboard/sailors/${sailor.id}`}
              >
                <Card className="hover:border-primary/30 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {profile?.full_name || "Unknown Sailor"}
                    </CardTitle>
                    <CardDescription>{profile?.email}</CardDescription>
                    <div className="flex gap-2 mt-2">
                      {boatClass && (
                        <Badge variant="outline">{boatClass.name}</Badge>
                      )}
                      {boatClass && (
                        <Badge variant="secondary" className="capitalize">
                          {boatClass.skill_level}
                        </Badge>
                      )}
                    </div>
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
