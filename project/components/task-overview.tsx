import { AlertCircle, CheckCircle, Clock, Users } from "lucide-react";

const taskStats = [
  {
    label: "Completed",
    count: 24,
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900"
  },
  {
    label: "In Progress",
    count: 18,
    icon: Clock,
    color: "",
    bgColor: ""
  },
  {
    label: "Overdue",
    count: 3,
    icon: AlertCircle,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900"
  },
  {
    label: "Assigned to Me",
    count: 12,
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900"
  }
];

export function TaskOverview() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h3 className="mb-6 text-lg font-semibold">Task Overview</h3>

      <div className="space-y-4">
        {taskStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center space-x-3">
              <div
                className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon
                  className={stat.color}
                  size={20}
                />
              </div>
              <span className="font-medium">{stat.label}</span>
            </div>
            <span className="text-2xl font-bold">{stat.count}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="text-sm">
          <span className="font-medium">Productivity:</span> 89% completion rate
          this week
        </div>
      </div>
    </div>
  );
}
