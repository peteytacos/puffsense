import { PuffLogo } from "@/components/puff-logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Anchor, Users } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <PuffLogo className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Get Started with PuffSense</h1>
          <p className="text-muted-foreground mt-2">
            Choose how you want to use PuffSense
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-2" />
              <CardTitle>Join a Club</CardTitle>
              <CardDescription>
                Your sailing club uses PuffSense. Enter your club&apos;s invite
                code to join their program.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/signup/club">I have an invite code</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent/40 transition-colors">
            <CardHeader className="text-center">
              <Anchor className="w-10 h-10 text-accent mx-auto mb-2" />
              <CardTitle>Track My Sailor</CardTitle>
              <CardDescription>
                Track your child&apos;s sailing development independently. Create
                rubrics, log sessions, and get AI coaching insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/signup/independent">Start as a parent</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
