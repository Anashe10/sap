import { MoreVertical, LucideIcon } from "lucide-react";
import { UpcomingActivity as UpcomingActivityType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface UpcomingActivityProps {
  activity: UpcomingActivityType;
}

export default function UpcomingActivity({ activity }: UpcomingActivityProps) {
  const getIconClass = () => {
    switch (activity.type) {
      case 'event':
        return "bg-primary-100 text-primary-600";
      case 'assignment':
        return "bg-warning/10 text-warning";
      case 'assessment':
        return "bg-info/10 text-info";
      default:
        return "bg-secondary-100 text-secondary-600";
    }
  };

  return (
    <div className="flex items-center p-3 bg-secondary-50 rounded-lg border border-secondary-200 mb-3 last:mb-0">
      <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3", getIconClass())}>
        <activity.icon size={20} />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-secondary-900">{activity.title}</h3>
        <p className="text-xs text-secondary-600">{activity.dateTime}</p>
      </div>
      <button className="text-secondary-400 hover:text-secondary-600">
        <MoreVertical size={18} />
      </button>
    </div>
  );
}
