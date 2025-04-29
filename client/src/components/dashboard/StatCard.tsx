import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  change?: {
    value: number;
    positive: boolean;
  };
  iconBgColor: string;
  iconColor: string;
}

export default function StatCard({ title, value, icon: Icon, change, iconBgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-secondary-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-secondary-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-semibold mt-2 text-secondary-900">{value}</p>
        </div>
        <div className={cn("rounded-full p-2", iconBgColor)}>
          <Icon className={iconColor} size={20} />
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center text-xs">
          <span className={cn(
            "flex items-center",
            change.positive ? "text-success" : "text-error"
          )}>
            {change.positive ? (
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L12 12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17L12 12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {change.positive ? "+" : "-"}{Math.abs(change.value)}
          </span>
          <span className="text-secondary-500 ml-2">since last month</span>
        </div>
      )}
    </div>
  );
}
