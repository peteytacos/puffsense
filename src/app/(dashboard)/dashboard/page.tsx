import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ClipboardList, Sailboat, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of your sailing program
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard
          title="Active Sailors"
          value="—"
          icon={<Sailboat className="w-4 h-4" />}
        />
        <StatCard
          title="Rubrics"
          value="—"
          icon={<ClipboardList className="w-4 h-4" />}
        />
        <StatCard
          title="Sessions"
          value="—"
          icon={<Users className="w-4 h-4" />}
        />
        <StatCard
          title="AI Insights"
          value="—"
          icon={<Brain className="w-4 h-4" />}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Recent Evaluations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              No evaluations yet. Start by creating a rubric and logging a
              session.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Latest AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Insights will appear here after your first evaluation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="pt-5 pb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground">{title}</p>
          <div className="text-muted-foreground">{icon}</div>
        </div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}
