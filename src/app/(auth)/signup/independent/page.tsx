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
import { signupIndependent } from "../../actions";

function IndependentSignupForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error: string } | null, formData: FormData) => {
      const result = await signupIndependent(formData);
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
        <Label htmlFor="name">Your Name</Label>
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
        <Label htmlFor="sailor-name">Sailor&apos;s Name</Label>
        <Input
          id="sailor-name"
          name="sailor-name"
          placeholder="Your child's name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="boat-class">Current Boat Class</Label>
        <select
          id="boat-class"
          name="boat-class"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">Select a boat class</option>
          <option value="opti">Optimist (Opti)</option>
          <option value="420">420</option>
          <option value="laser">Laser / ILCA</option>
          <option value="fj">Flying Junior (FJ)</option>
          <option value="sunfish">Sunfish</option>
          <option value="c420">Club 420</option>
          <option value="other">Other</option>
        </select>
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}

export default function IndependentSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <PuffLogo className="w-7 h-7 mx-auto mb-3" />
          <CardTitle className="text-xl font-semibold tracking-tight">Track Your Sailor</CardTitle>
          <CardDescription>
            Create your account to start tracking your child&apos;s sailing
            development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <IndependentSignupForm />
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
