import { PuffLogo } from "@/components/puff-logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Anchor,
  BarChart3,
  BookOpen,
  Brain,
  Medal,
  MessageSquare,
  Target,
  TreePine,
  Users,
  Wind,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <PuffLogo className="w-8 h-8" />
            <span className="font-bold text-lg text-primary">PuffSense</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <Button size="sm" variant="outline" asChild>
              <a href="/login">Log In</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <PuffLogo className="w-28 h-28 mx-auto mb-8" />
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-4">
            A puff ahead of the competition
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Smarter coaching for developing sailors
          </p>
          <p className="text-lg text-accent font-semibold mb-8">
            From Dinghies to D1
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            PuffSense is an AI-driven coaching system that delivers anticipatory,
            context-aware feedback — surfacing insights and corrections before
            sailors know to ask. Powered by expert rubrics, coach evaluations, and
            real sailing conditions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/signup">Start Free</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* For Clubs / For Parents */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">For Sailing Clubs</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Define rubrics for each boat class, assign coaches, and give every
                family in your program clarity on what their sailor needs to
                advance. Eliminate confusion about progression requirements.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2 border-accent/40">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Anchor className="w-6 h-6 text-accent" />
                <CardTitle className="text-xl">For Sailing Parents</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                No club? No problem. Track your child&apos;s sailing development
                independently. Create rubrics with AI, log sessions, and get
                personalized coaching insights — all from Puff.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Everything your sailor needs to level up
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            PuffSense combines coach expertise, rubric-based progression, and AI
            insights into one platform.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Coaching Insights"
              description="Claude-powered feedback that surfaces what your sailor should focus on — before they know to ask."
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Rubric-Based Progression"
              description="Club-defined rubrics show exactly what's needed to advance to the next boat class. No more guessing."
            />
            <FeatureCard
              icon={<TreePine className="w-6 h-6" />}
              title="Skill Tree & Progress Map"
              description="Visual journey from current boat class to the next. See locked, in-progress, and mastered skills at a glance."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="AI Rubric Builder"
              description="Chat with Puff to create custom rubrics. Tell the AI about your sailor and get a tailored skill progression plan."
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Session Journal"
              description="Sailors log their own notes after each session. AI uses their reflections to personalize coaching insights."
            />
            <FeatureCard
              icon={<Medal className="w-6 h-6" />}
              title="Achievements & Badges"
              description="Gamified milestones keep young sailors motivated. Earn badges for mastering skills and hitting goals."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Adaptive Dashboard"
              description="UI adapts by boat class: playful for Opti sailors, data-driven for 420/Laser and college racing."
            />
            <FeatureCard
              icon={<Wind className="w-6 h-6" />}
              title="Session & Conditions Tracking"
              description="Coaches log wind, weather, and water conditions alongside evaluations for full context."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Parent Dashboard"
              description="See your child's progress, rubric status, and AI-recommended next steps. Know exactly what to sign up for."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-secondary/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step={1}
              title="Sign Up"
              description="Join your sailing club's program or start tracking independently as a parent."
            />
            <StepCard
              step={2}
              title="Set Up Rubrics"
              description="Use your club's rubrics or chat with Puff to create custom ones for your sailor's boat class."
            />
            <StepCard
              step={3}
              title="Get Coaching Insights"
              description="After each evaluation, AI generates focus areas, goal nudges, and next-step recommendations."
            />
          </div>
        </div>
      </section>

      {/* Pricing Placeholder */}
      <section id="pricing" className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground mb-8">
            Coming soon. PuffSense will offer free and premium tiers for families
            and clubs.
          </p>
          <Button size="lg" asChild>
            <a href="/signup">Join the Waitlist</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PuffLogo className="w-6 h-6" />
            <span className="text-sm text-muted-foreground">
              PuffSense — Smarter coaching for developing sailors
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PuffSense
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="text-primary mb-2">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
