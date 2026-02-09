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
import { login } from "../actions";

function LoginForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error: string } | null, formData: FormData) => {
      const result = await login(formData);
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
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="sailor@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <PuffLogo className="w-16 h-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your PuffSense account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="text-sm text-muted-foreground text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary underline underline-offset-4"
            >
              Get started
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
