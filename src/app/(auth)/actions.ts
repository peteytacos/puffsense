"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { UserRole } from "@/types/database";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/dashboard");
}

export async function signupClub(formData: FormData) {
  const supabase = await createClient();

  const inviteCode = formData.get("invite-code") as string;
  const fullName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  // Look up the club by invite code
  const { data: team, error: teamError } = await supabase
    .from("teams")
    .select("id")
    .eq("invite_code", inviteCode)
    .single<{ id: string }>();

  if (teamError || !team) {
    return { error: "Invalid invite code. Please check with your club." };
  }

  // Create the user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role as UserRole,
      },
    },
  });

  if (authError) {
    return { error: authError.message };
  }

  // Update profile with team_id (use rpc or raw update since profile was just created by trigger)
  if (authData.user) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from("profiles")
      .update({ team_id: team.id })
      .eq("id", authData.user.id);
  }

  redirect("/dashboard");
}

export async function signupIndependent(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const sailorName = formData.get("sailor-name") as string;
  const boatClass = formData.get("boat-class") as string;

  // Create the user as a parent
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: "parent",
      },
    },
  });

  if (authError) {
    return { error: authError.message };
  }

  if (!authData.user) {
    return { error: "Failed to create account." };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  // Create a family team
  const { data: team, error: teamError } = await db
    .from("teams")
    .insert({
      name: `${fullName}'s Family`,
      type: "family",
    })
    .select("id")
    .single();

  if (teamError || !team) {
    return { error: "Failed to create family team." };
  }

  // Update parent profile with team and independent coach flag
  await db
    .from("profiles")
    .update({
      team_id: team.id,
      is_independent_coach: true,
    })
    .eq("id", authData.user.id);

  // Create a boat class if selected
  let boatClassId: string | null = null;
  if (boatClass) {
    const boatClassNames: Record<string, string> = {
      opti: "Optimist (Opti)",
      "420": "420",
      laser: "Laser / ILCA",
      fj: "Flying Junior (FJ)",
      sunfish: "Sunfish",
      c420: "Club 420",
      other: "Other",
    };

    const { data: bc } = await db
      .from("boat_classes")
      .insert({
        team_id: team.id,
        name: boatClassNames[boatClass] || boatClass,
        skill_level: "beginner",
      })
      .select("id")
      .single();

    if (bc) boatClassId = bc.id;
  }

  // Create a sailor profile linked to the parent
  // The sailor can be invited later with their own login
  await db.from("sailor_profiles").insert({
    profile_id: authData.user.id,
    parent_id: authData.user.id,
    current_boat_class_id: boatClassId,
  });

  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
