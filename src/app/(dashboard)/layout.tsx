import { PuffLogo } from "@/components/puff-logo";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Home,
  Medal,
  MessageSquare,
  Sailboat,
  Settings,
  Target,
  Users,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <PuffLogo className="w-6 h-6" />
            <span className="font-semibold text-sm tracking-tight">
              PuffSense
            </span>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <NavItem href="/dashboard" icon={<Home className="w-4 h-4" />} label="Dashboard" />
          <NavItem href="/dashboard/sailors" icon={<Sailboat className="w-4 h-4" />} label="Sailors" />
          <NavItem href="/dashboard/rubrics" icon={<ClipboardList className="w-4 h-4" />} label="Rubrics" />
          <NavItem href="/dashboard/sessions" icon={<BookOpen className="w-4 h-4" />} label="Sessions" />
          <NavItem href="/dashboard/insights" icon={<MessageSquare className="w-4 h-4" />} label="AI Insights" />

          <div className="pt-5 pb-1.5">
            <p className="text-[11px] font-medium text-sidebar-foreground/40 uppercase tracking-widest px-3">
              My Sailing
            </p>
          </div>
          <NavItem href="/dashboard/my-progress" icon={<BarChart3 className="w-4 h-4" />} label="My Progress" />
          <NavItem href="/dashboard/goals" icon={<Target className="w-4 h-4" />} label="Goals" />
          <NavItem href="/dashboard/journal" icon={<BookOpen className="w-4 h-4" />} label="Journal" />
          <NavItem href="/dashboard/badges" icon={<Medal className="w-4 h-4" />} label="Badges" />

          <div className="pt-5 pb-1.5">
            <p className="text-[11px] font-medium text-sidebar-foreground/40 uppercase tracking-widest px-3">
              Admin
            </p>
          </div>
          <NavItem href="/dashboard/admin/team" icon={<Settings className="w-4 h-4" />} label="Team Settings" />
          <NavItem href="/dashboard/admin/coaches" icon={<Users className="w-4 h-4" />} label="Coaches" />
        </nav>
      </aside>

      <main className="flex-1 bg-background overflow-y-auto">
        <div className="p-8 max-w-5xl">{children}</div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-1.5 rounded-md text-[13px] text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
