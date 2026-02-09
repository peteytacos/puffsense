"use client";

import { PuffLogo } from "@/components/puff-logo";
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
import Link from "next/link";
import { useActionState } from "react";
import { signupClub } from "../../actions";

function ClubSignupForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error: string } | null, formData: FormData) => {
      const result = await signupClub(formData);
      return result ?? null;
    },
    null
  );

  return (
    <form action={formAction} className="space-y-4">
      {state?.error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {state.error}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="invite-code">Club Invite Code</Label>
        <Input
          id="invite-code"
          name="invite-code"
          placeholder="e.g. SAIL-CLUB-2026"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">I am a...</Label>
        <select
          id="role"
          name="role"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="parent">Parent / Guardian</option>
          <option value="sailor">Sailor</option>
          <option value="coach">Coach</option>
        </select>
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Joining..." : "Join Club"}
      </Button>
    </form>
  );
}

export default function ClubSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <PuffLogo className="w-16 h-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Join Your Club</CardTitle>
          <CardDescription>
            Enter your club&apos;s invite code and create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClubSignupForm />
          <p className="text-sm text-muted-foreground text-center mt-4">
            <Link
              href="/signup"
              className="text-primary underline underline-offset-4"
            >
              Back to options
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
