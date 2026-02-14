import { PuffLogo } from "@/components/puff-logo";
import { Button } from "@/components/ui/button";
import { ScrollNav } from "@/components/scroll-nav";
import {
  Anchor,
  BarChart3,
  BookOpen,
  Brain,
  ChevronRight,
  Medal,
  MessageSquare,
  Ship,
  Star,
  Target,
  TreePine,
  Users,
  Wind,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav — fixed, blurs on scroll */}
      <ScrollNav>
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
            <PuffLogo className="w-7 h-7" />
            <span className="font-display font-semibold text-lg tracking-tight">
              PuffSense
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
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
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Coaches
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm" variant="ghost" asChild>
              <a href="/login">Log In</a>
            </Button>
            <Button size="sm" className="rounded-full px-5" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </ScrollNav>

      {/* Hero — full bleed */}
      <section className="relative min-h-[75vh]">
        {/* Full-bleed background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.96_0.02_270)] via-[oklch(0.97_0.015_265)] to-background" />

        {/* ── Clouds & sky (full bleed, behind content) ── */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sun — upper right, unobstructed */}
          <svg
            className="absolute top-[4%] right-[12%] md:right-[16%] w-[180px] md:w-[240px]"
            viewBox="0 0 260 260"
            fill="none"
          >
            <circle cx="130" cy="130" r="120" fill="oklch(0.94 0.06 80)" opacity="0.35" />
            <circle cx="130" cy="130" r="80" fill="oklch(0.93 0.08 78)" opacity="0.5" />
            <circle cx="130" cy="130" r="48" fill="oklch(0.95 0.07 75)" opacity="0.7" />
          </svg>

          {/* ── Clouds: continuous drift left-to-right ── */}
          <div className="absolute inset-0 w-[200%] animate-clouds">
            {/* First cloud set */}
            <div className="absolute top-0 left-0 w-1/2 h-full">
              <svg className="absolute top-[4%] -left-[4%] w-[18%] md:w-[14%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.95 0.02 272)" opacity="0.5" />
              </svg>
              <svg className="absolute top-[48%] left-[6%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 274)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[8%] left-[18%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 270)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[30%] left-[30%] w-[15%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 273)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[2%] left-[40%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[52%] left-[50%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.025 275)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[6%] left-[58%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 273)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[28%] left-[70%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.93 0.025 276)" opacity="0.48" />
              </svg>
              <svg className="absolute top-[45%] left-[82%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 275)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[60%] left-[86%] w-[18%] md:w-[14%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.93 0.025 276)" opacity="0.48" />
              </svg>
              <svg className="absolute top-[18%] left-[10%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 271)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[40%] left-[22%] w-[15%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[14%] left-[35%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.96 0.02 270)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[36%] left-[54%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 274)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[10%] left-[76%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[32%] left-[2%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.02 273)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[56%] left-[14%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.95 0.02 275)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[12%] left-[26%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 271)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[50%] left-[34%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[22%] left-[44%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[42%] left-[46%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.02 275)" opacity="0.36" />
              </svg>
              <svg className="absolute top-[48%] left-[62%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.93 0.025 276)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[16%] left-[66%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 273)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[38%] left-[78%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[20%] left-[90%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 271)" opacity="0.42" />
              </svg>
            </div>
            {/* Second cloud set (duplicate for seamless loop) */}
            <div className="absolute top-0 left-1/2 w-1/2 h-full">
              <svg className="absolute top-[4%] -left-[4%] w-[18%] md:w-[14%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.95 0.02 272)" opacity="0.5" />
              </svg>
              <svg className="absolute top-[48%] left-[6%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 274)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[8%] left-[18%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 270)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[30%] left-[30%] w-[15%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 273)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[2%] left-[40%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[52%] left-[50%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.025 275)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[6%] left-[58%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 273)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[28%] left-[70%] w-[16%] md:w-[12%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.93 0.025 276)" opacity="0.48" />
              </svg>
              <svg className="absolute top-[45%] left-[82%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 275)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[60%] left-[86%] w-[18%] md:w-[14%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.93 0.025 276)" opacity="0.48" />
              </svg>
              <svg className="absolute top-[18%] left-[10%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 271)" opacity="0.45" />
              </svg>
              <svg className="absolute top-[40%] left-[22%] w-[15%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[14%] left-[35%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.96 0.02 270)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[36%] left-[54%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.94 0.02 274)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[10%] left-[76%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[32%] left-[2%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.02 273)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[56%] left-[14%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.95 0.02 275)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[12%] left-[26%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 271)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[50%] left-[34%] w-[14%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[22%] left-[44%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 272)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[42%] left-[46%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M10 82 C2 82 0 72 6 62 C0 50 12 34 32 28 C36 10 58 2 82 8 C94 0 118 0 132 12 C148 2 170 8 176 28 C190 26 200 42 192 58 C200 68 194 82 178 85 Z" fill="oklch(0.94 0.02 275)" opacity="0.36" />
              </svg>
              <svg className="absolute top-[48%] left-[62%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M8 78 C0 76 0 62 8 54 C2 40 16 24 38 20 C46 4 70 0 92 8 C108 0 130 6 138 22 C154 18 174 28 172 48 C182 56 180 72 166 78 Z" fill="oklch(0.93 0.025 276)" opacity="0.42" />
              </svg>
              <svg className="absolute top-[16%] left-[66%] w-[12%] md:w-[9%]" viewBox="0 0 200 100" fill="none">
                <path d="M14 76 C4 76 2 66 8 56 C2 44 14 28 36 24 C42 8 64 2 86 10 C100 2 122 8 130 24 C144 20 160 30 156 48 C166 56 162 72 148 76 Z" fill="oklch(0.95 0.02 273)" opacity="0.38" />
              </svg>
              <svg className="absolute top-[38%] left-[78%] w-[13%] md:w-[10%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 80 C2 78 0 66 8 56 C0 44 14 26 36 22 C42 6 66 0 88 8 C102 0 124 4 132 20 C150 14 172 24 170 44 C182 52 178 72 164 78 Z" fill="oklch(0.94 0.025 274)" opacity="0.4" />
              </svg>
              <svg className="absolute top-[20%] left-[90%] w-[14%] md:w-[11%]" viewBox="0 0 200 100" fill="none">
                <path d="M12 78 C4 78 2 68 8 58 C2 46 14 32 34 28 C40 12 62 4 82 10 C96 4 116 8 124 22 C138 18 156 26 154 44 C164 52 160 68 148 74 Z" fill="oklch(0.95 0.02 271)" opacity="0.42" />
              </svg>
            </div>
          </div>

          {/* Sparkles */}
          <svg className="absolute top-[15%] left-[22%] w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="oklch(0.93 0.08 78)" opacity="0.6" />
          </svg>
          <svg className="absolute top-[10%] left-[50%] w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="oklch(0.90 0.06 280)" opacity="0.45" />
          </svg>
          <svg className="absolute top-[38%] right-[12%] w-3 h-3" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="oklch(0.92 0.07 78)" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-[40%] left-[5%] w-3 h-3" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="oklch(0.91 0.07 80)" opacity="0.5" />
          </svg>

          {/* Water back layer — full width, taller, soft fade at bottom */}
          <svg
            className="absolute bottom-0 left-0 w-full h-[160px]"
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
          >
            <path
              d="M0 40 C60 22,120 55,180 40 C240 22,300 55,360 40 C420 22,480 55,540 40 C600 22,660 55,720 40 C780 22,840 55,900 40 C960 22,1020 55,1080 40 C1140 22,1200 55,1260 40 C1320 22,1380 55,1440 40 L1440 160 L0 160Z"
              fill="oklch(0.86 0.07 232)"
              opacity="0.35"
            />
          </svg>

          {/* Sabot sailboat — cartoonish, sits between water layers */}
          <svg
            className="absolute bottom-[20px] -right-[8%] sm:-right-[4%] md:right-[14%] w-[350px] sm:w-[430px] md:w-[540px] drop-shadow-lg animate-sailboat"
            viewBox="0 0 200 260"
            fill="none"
            style={{ zIndex: 2 }}
          >
            {/* Mast — near bow, connected to deck */}
            <line x1="58" y1="20" x2="60" y2="204" stroke="oklch(0.55 0.03 260)" strokeWidth="4" strokeLinecap="round" />

            {/* Boom */}
            <line x1="60" y1="200" x2="165" y2="193" stroke="oklch(0.55 0.03 260)" strokeWidth="3.5" strokeLinecap="round" />

            {/* Sail — bold triangle, slightly curved */}
            <path
              d="M59 24 L60 198 L163 191 Q125 105 59 24Z"
              fill="oklch(0.97 0.015 270)"
            />
            <path
              d="M59 24 L60 198 L163 191 Q125 105 59 24Z"
              fill="url(#heroSailGrad)"
              opacity="0.5"
            />

            {/* Hull — Sabot: curved bow sweep, flat bottom, flat transom, low profile */}
            <path
              d="M35 204 C36 216 38 228 44 234 C48 238 54 238 60 238 L170 234 L170 204 Z"
              fill="oklch(0.94 0.025 260)"
            />
            {/* Gunwale top edge */}
            <path
              d="M35 204 L170 204"
              stroke="oklch(0.80 0.08 248)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hull accent stripe */}
            <path
              d="M39 222 C60 224 130 224 170 222"
              stroke="oklch(0.80 0.08 248)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />

            <defs>
              <linearGradient id="heroSailGrad" x1="59" y1="24" x2="163" y2="191" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="oklch(0.98 0.01 268)" />
                <stop offset="1" stopColor="oklch(0.88 0.05 250)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Water front layer — overlaps hull bottom, soft fade */}
          <svg
            className="absolute bottom-0 left-0 w-full h-[160px]"
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            style={{ zIndex: 3, maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
          >
            <path
              d="M0 65 C80 45,160 78,240 60 C320 42,400 78,480 60 C560 42,640 78,720 60 C800 42,880 78,960 60 C1040 42,1120 78,1200 60 C1280 42,1360 78,1440 60 L1440 160 L0 160Z"
              fill="oklch(0.83 0.08 236)"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Content — top-aligned on mobile so it clears the sailboat, centered on md+ */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 min-h-[75vh] flex items-start pt-28 sm:pt-32 md:items-center md:pt-0">
          <div className="max-w-2xl">
            {/* Tag — tight to heading */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-primary text-sm font-medium mb-4 border border-primary/10">
              <Wind className="w-3.5 h-3.5" />
              AI-powered sailing coach
            </div>

            {/* Heading — always 2 lines */}
            <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] font-bold tracking-tight leading-[1.08] mb-5">
              <span className="block">Your smart</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[oklch(0.55_0.16_300)] pb-2">
                sailing companion
              </span>
            </h1>

            {/* Subheadline — closer to heading than to CTA */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8 md:mb-14">
              Built for Sabot sailors and beyond — track every young
              sailor&apos;s development with expert rubrics and AI&nbsp;insights.
            </p>

            {/* CTA — most separation, anchors the lockup */}
            <div className="relative inline-block group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/40 via-[oklch(0.55_0.16_300)]/30 to-accent/30 blur-xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-110 transition-all duration-500 ease-out" />
              <Button size="lg" className="relative rounded-full px-10 h-12 text-base shadow-[0_8px_30px_-4px] shadow-primary/30" asChild>
                <a href="/signup">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1 cta-arrow" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features — "The Smartest All-in-One Coaching Platform" */}
      <section id="features" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Smartest All-in-One
              <br />
              Coaching Platform
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Smarter coaching starts with PuffSense. Track, evaluate, and get
              AI-powered insights — all in one place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <BigFeatureCard
              icon={<Brain className="w-5 h-5" />}
              iconBg="bg-primary/10 text-primary"
              title="AI Coaching Insights"
              description="Anticipatory feedback surfaces what to focus on before they know to ask."
            />
            <BigFeatureCard
              icon={<Target className="w-5 h-5" />}
              iconBg="bg-accent/15 text-accent-foreground"
              title="Rubric Progression"
              description="Know exactly what's needed to advance to the next boat class."
            />
            <BigFeatureCard
              icon={<BookOpen className="w-5 h-5" />}
              iconBg="bg-[oklch(0.85_0.08_160)] text-[oklch(0.35_0.14_160)]"
              title="Session Journal"
              description="Sailors log reflections. AI uses them to personalize coaching."
            />
            <BigFeatureCard
              icon={<BarChart3 className="w-5 h-5" />}
              iconBg="bg-[oklch(0.55_0.16_300)]/10 text-[oklch(0.55_0.16_300)]"
              title="Adaptive Dashboard"
              description="UI adapts by level — playful for Opti, data-driven for racing."
            />
          </div>
        </div>
      </section>

      {/* For Clubs / For Parents */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          {/* For Clubs */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] border border-primary/10 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/[0.06] blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Anchor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">For Sailing Clubs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Define rubrics for each boat class, assign coaches, and give
                every family clarity on what their sailor needs to advance. Manage
                your entire program from one dashboard.
              </p>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/signup/club">
                  Set Up Your Club
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* For Parents */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/[0.1] to-accent/[0.03] border border-accent/15 p-8 md:p-10">
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-accent/[0.08] blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                <Ship className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">For Sailing Parents</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No club? No problem. Track your child&apos;s development
                independently with AI-powered rubrics, evaluations, and coaching
                insights tailored to their level.
              </p>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/signup/independent">
                  Start as Parent
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Coaches Love PuffSense
            </h2>
            <p className="text-muted-foreground text-lg">
              Join a community of coaches who get it all done with PuffSense.
            </p>
            <div className="mt-6">
              <Button className="rounded-full px-6" asChild>
                <a href="/signup">Join Them Today</a>
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <TestimonialCard
              quote="PuffSense took my scattered evaluation notes and turned them into clear progression paths. My parents finally understand where their kids stand."
              name="Holly W."
              role="Opti Coach, ABYC"
              stars={5}
            />
            <TestimonialCard
              quote="The AI insights are incredible — it's like having an experienced coaching assistant that never misses a pattern across 20+ sailors."
              name="Alex G."
              role="Head Coach, Lake Norman YC"
              stars={5}
            />
            <TestimonialCard
              quote="I love being a coach but hated the paperwork. PuffSense made evaluations so much easier — and the parents love the automated progress reports."
              name="Sebastian M."
              role="420 Coach, SFYC"
              stars={5}
            />
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why PuffSense Stands Out
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              See how PuffSense combines intelligent coaching tools with a
              beautiful, adaptive interface.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon={<TreePine className="w-4 h-4" />}
              iconBg="bg-[oklch(0.85_0.08_160)] text-[oklch(0.35_0.14_160)]"
              title="Skill Tree"
              description="Visual progression from current level to the next — locked, active, and mastered."
            />
            <FeatureCard
              icon={<MessageSquare className="w-4 h-4" />}
              iconBg="bg-primary/10 text-primary"
              title="AI Rubric Builder"
              description="Chat with AI to create custom rubrics tailored to your sailors."
            />
            <FeatureCard
              icon={<Medal className="w-4 h-4" />}
              iconBg="bg-accent/15 text-accent-foreground"
              title="Achievements"
              description="Milestone badges keep young sailors motivated and on track."
            />
            <FeatureCard
              icon={<Wind className="w-4 h-4" />}
              iconBg="bg-[oklch(0.55_0.16_300)]/10 text-[oklch(0.55_0.16_300)]"
              title="Conditions Tracking"
              description="Wind, weather, and water logged alongside every evaluation."
            />
            <FeatureCard
              icon={<Users className="w-4 h-4" />}
              iconBg="bg-primary/10 text-primary"
              title="Parent Dashboard"
              description="See progress, rubric status, and AI-recommended next steps."
            />
            <FeatureCard
              icon={<Brain className="w-4 h-4" />}
              iconBg="bg-[oklch(0.85_0.08_160)] text-[oklch(0.35_0.14_160)]"
              title="Smart Scheduling"
              description="Sessions adapt to conditions, sailor availability, and progression."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step={1}
              color="bg-primary/10 text-primary border-primary/20"
              title="Sign Up"
              description="Join your club's program or start tracking independently as a parent or coach."
            />
            <StepCard
              step={2}
              color="bg-accent/15 text-accent-foreground border-accent/20"
              title="Set Up Rubrics"
              description="Use club rubrics or build custom ones with AI for your sailor's boat class."
            />
            <StepCard
              step={3}
              color="bg-[oklch(0.85_0.08_160)] text-[oklch(0.35_0.14_160)] border-[oklch(0.35_0.14_160)]/10"
              title="Get Insights"
              description="AI surfaces focus areas, goal nudges, and recommendations after each session."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              FAQ
            </h2>
            <p className="text-muted-foreground text-lg">
              Great answers are kind of our thing. Here are some frequently
              asked questions.
            </p>
          </div>
          <div className="space-y-3">
            <FaqItem
              question="How do I know I can trust PuffSense?"
              answer="PuffSense was built by competitive sailing coaches and parents. Our AI models are trained on expert coaching rubrics and validated by US Sailing-certified instructors."
            />
            <FaqItem
              question="How will you keep my sailor's data private?"
              answer="We use Supabase with row-level security. Only authorized coaches and parents can access sailor data. We never share or sell personal information."
            />
            <FaqItem
              question="Do you offer a free trial?"
              answer="Yes! PuffSense is free during early access. We'll always have a generous free tier for individual coaches and parents."
            />
            <FaqItem
              question="Can I use PuffSense for other boat classes?"
              answer="Absolutely. We support Opti, Sabot, 420, Laser/ILCA, FJ, Sunfish, Club 420, and more. You can also create custom rubrics for any boat class."
            />
            <FaqItem
              question="What can't PuffSense do?"
              answer="PuffSense doesn't replace on-the-water coaching. It's a tool that helps coaches be more effective and gives families visibility into development."
            />
          </div>
        </div>
      </section>

      {/* Big Quote CTA */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-accent/[0.04] to-[oklch(0.55_0.16_300)]/[0.04] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-8">
            <span className="text-muted-foreground/30">&ldquo;</span>
            PuffSense has made coaching{" "}
            <span className="italic">so much</span> more{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
              effective
            </span>
            <span className="text-muted-foreground/30">&rdquo;</span>
          </div>
          <Button size="lg" className="rounded-full px-10 h-12 text-base" asChild>
            <a href="/signup">Get Started</a>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[oklch(0.2_0.04_260)] to-[oklch(0.15_0.03_250)] p-10 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Because that scoring question
                <br />
                shouldn&apos;t keep you up at night.
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                Let AI handle the patterns while you focus on what matters —
                being on the water.
              </p>
              <Button
                size="lg"
                className="rounded-full px-10 h-12 text-base bg-white text-[oklch(0.15_0.03_250)] hover:bg-white/90"
                asChild
              >
                <a href="/signup">Get Started Free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PuffLogo className="w-6 h-6" />
                <span className="font-display font-semibold">PuffSense</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Make your coaching journey feel confident, supported, and
                data-driven.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3">Why PuffSense</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-foreground transition-colors">Coaches</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3">Get Started</h4>
              <Button className="rounded-full w-full" asChild>
                <a href="/signup">Sign Up Free</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border/30 gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PuffSense. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Component helpers ─── */

function BigFeatureCard({
  icon,
  iconBg,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6 hover:shadow-lg hover:shadow-primary/[0.04] transition-all hover:-translate-y-0.5">
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="font-display font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border/50 bg-card p-5 hover:border-border/80 transition-all">
      <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h3 className="font-display font-medium text-sm mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  step,
  color,
  title,
  description,
}: {
  step: number;
  color: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div
        className={`w-14 h-14 rounded-2xl border-2 ${color} flex items-center justify-center text-lg font-bold mx-auto mb-5`}
      >
        {step}
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  stars,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6 hover:shadow-lg hover:shadow-primary/[0.04] transition-all">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-accent text-accent"
          />
        ))}
      </div>
      <p className="text-sm leading-relaxed mb-5">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-border/50 bg-card">
      <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
      </summary>
      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">
        {answer}
      </div>
    </details>
  );
}
