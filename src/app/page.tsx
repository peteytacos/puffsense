import { PuffLogo } from "@/components/puff-logo";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  BookOpen,
  Brain,
  ChevronRight,
  Medal,
  MessageSquare,
  Target,
  TreePine,
  Users,
  Wind,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <PuffLogo className="w-7 h-7" />
            <span className="font-semibold text-base tracking-tight">
              PuffSense
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="ghost" asChild>
                <a href="/login">Log In</a>
              </Button>
              <Button size="sm" asChild>
                <a href="/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            From Dinghies to D1
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Smarter coaching for
            <br />
            <span className="text-primary">developing sailors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-driven feedback that surfaces insights before sailors know to
            ask. Powered by expert rubrics, coach evaluations, and real
            conditions data.
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" asChild>
              <a href="/signup">
                Start Free
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-border/60 bg-card p-1.5 shadow-2xl shadow-primary/5">
            <div className="rounded-lg bg-background border border-border/40 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <PuffLogo className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Dashboard</span>
                <div className="flex-1" />
                <div className="flex gap-2">
                  <div className="w-20 h-6 rounded bg-muted" />
                  <div className="w-16 h-6 rounded bg-primary/20" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                {["12 Sailors", "8 Rubrics", "24 Sessions", "47 Insights"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border/40 bg-card p-3"
                    >
                      <div className="text-xs text-muted-foreground mb-1">
                        {label.split(" ")[1]}
                      </div>
                      <div className="text-lg font-semibold">
                        {label.split(" ")[0]}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border/40 bg-card p-4 h-32">
                  <div className="text-xs text-muted-foreground mb-3">
                    Recent Evaluations
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 rounded bg-muted w-full" />
                    <div className="h-2.5 rounded bg-muted w-3/4" />
                    <div className="h-2.5 rounded bg-muted w-5/6" />
                  </div>
                </div>
                <div className="rounded-lg border border-border/40 bg-card p-4 h-32">
                  <div className="text-xs text-muted-foreground mb-3">
                    AI Insights
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 rounded bg-primary/15 w-full" />
                    <div className="h-2.5 rounded bg-primary/15 w-2/3" />
                    <div className="h-2.5 rounded bg-primary/15 w-4/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Clubs / For Parents */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">For Sailing Clubs</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Define rubrics for each boat class, assign coaches, and give every
              family clarity on what their sailor needs to advance.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">For Sailing Parents</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              No club? No problem. Track your child&apos;s development
              independently with AI-powered rubrics and coaching insights.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Everything your sailor needs
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Coach expertise, rubric-based progression, and AI insights in one
              platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FeatureCard
              icon={<Brain className="w-4 h-4" />}
              title="AI Coaching Insights"
              description="Feedback that surfaces what to focus on — before they know to ask."
            />
            <FeatureCard
              icon={<Target className="w-4 h-4" />}
              title="Rubric Progression"
              description="Know exactly what's needed to advance to the next boat class."
            />
            <FeatureCard
              icon={<TreePine className="w-4 h-4" />}
              title="Skill Tree"
              description="Visual map from current level to the next with locked, active, and mastered skills."
            />
            <FeatureCard
              icon={<MessageSquare className="w-4 h-4" />}
              title="AI Rubric Builder"
              description="Chat with AI to create custom rubrics tailored to your sailor."
            />
            <FeatureCard
              icon={<BookOpen className="w-4 h-4" />}
              title="Session Journal"
              description="Sailors log reflections. AI uses them to personalize coaching."
            />
            <FeatureCard
              icon={<Medal className="w-4 h-4" />}
              title="Achievements"
              description="Milestone badges keep young sailors motivated and on track."
            />
            <FeatureCard
              icon={<BarChart3 className="w-4 h-4" />}
              title="Adaptive Dashboard"
              description="UI adapts by level: playful for Opti, data-driven for racing."
            />
            <FeatureCard
              icon={<Wind className="w-4 h-4" />}
              title="Conditions Tracking"
              description="Wind, weather, and water logged alongside every evaluation."
            />
            <FeatureCard
              icon={<Users className="w-4 h-4" />}
              title="Parent Dashboard"
              description="See progress, rubric status, and AI-recommended next steps."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step={1}
              title="Sign Up"
              description="Join your club's program or start tracking independently as a parent."
            />
            <StepCard
              step={2}
              title="Set Up Rubrics"
              description="Use club rubrics or build custom ones with AI for your sailor's boat class."
            />
            <StepCard
              step={3}
              title="Get Insights"
              description="AI generates focus areas, goal nudges, and recommendations after each evaluation."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-t border-border/40">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Pricing</h2>
          <p className="text-muted-foreground mb-8">
            Free and premium tiers for families and clubs. Coming soon.
          </p>
          <Button size="lg" asChild>
            <a href="/signup">Join the Waitlist</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PuffLogo className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">PuffSense</span>
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
    <div className="group rounded-xl border border-border/60 bg-card p-5 hover:border-border transition-colors">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
        {icon}
      </div>
      <h3 className="font-medium text-sm mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
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
      <div className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center text-sm font-semibold mx-auto mb-4">
        {step}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
