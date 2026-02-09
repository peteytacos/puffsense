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
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col shrink-0">
        <div className="p-4 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <PuffLogo className="w-8 h-8" />
            <span className="font-bold text-lg">PuffSense</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <NavItem href="/dashboard" icon={<Home className="w-4 h-4" />} label="Dashboard" />
          <NavItem href="/dashboard/sailors" icon={<Sailboat className="w-4 h-4" />} label="Sailors" />
          <NavItem href="/dashboard/rubrics" icon={<ClipboardList className="w-4 h-4" />} label="Rubrics" />
          <NavItem href="/dashboard/sessions" icon={<BookOpen className="w-4 h-4" />} label="Sessions" />
          <NavItem href="/dashboard/insights" icon={<MessageSquare className="w-4 h-4" />} label="AI Insights" />

          <div className="pt-4 pb-2">
            <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider px-3">
              My Sailing
            </p>
          </div>
          <NavItem href="/dashboard/my-progress" icon={<BarChart3 className="w-4 h-4" />} label="My Progress" />
          <NavItem href="/dashboard/goals" icon={<Target className="w-4 h-4" />} label="Goals" />
          <NavItem href="/dashboard/journal" icon={<BookOpen className="w-4 h-4" />} label="Journal" />
          <NavItem href="/dashboard/badges" icon={<Medal className="w-4 h-4" />} label="Badges" />

          <div className="pt-4 pb-2">
            <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider px-3">
              Admin
            </p>
          </div>
          <NavItem href="/dashboard/admin/team" icon={<Settings className="w-4 h-4" />} label="Team Settings" />
          <NavItem href="/dashboard/admin/coaches" icon={<Users className="w-4 h-4" />} label="Coaches" />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-background overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
