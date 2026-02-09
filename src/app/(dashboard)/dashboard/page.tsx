import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PuffLogo } from "@/components/puff-logo";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <PuffLogo className="w-10 h-10" />
        <div>
          <h1 className="text-2xl font-bold">Welcome to PuffSense</h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your sailing program
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Active Sailors" value="—" />
        <StatCard title="Rubrics" value="—" />
        <StatCard title="Sessions This Month" value="—" />
        <StatCard title="AI Insights" value="—" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Evaluations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              No evaluations yet. Start by creating a rubric and logging a
              session.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latest AI Insights</CardTitle>
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

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
