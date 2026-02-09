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

export default function IndependentSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/30">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <PuffLogo className="w-16 h-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Track Your Sailor</CardTitle>
          <CardDescription>
            Create your account to start tracking your child&apos;s sailing
            development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sailor-name">Sailor&apos;s Name</Label>
              <Input id="sailor-name" placeholder="Your child's name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="boat-class">Current Boat Class</Label>
              <select
                id="boat-class"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
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
