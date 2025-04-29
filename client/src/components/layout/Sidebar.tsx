import { useLocation, Link } from "wouter";
import { 
  LayoutDashboard, 
  GraduationCap, 
  BookOpen, 
  FlagTriangleRight, 
  Award, 
  Users,
  BarChart, 
  Layers, 
  Settings,
  Menu,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ collapsed, toggleSidebar }: SidebarProps) {
  const [location] = useLocation();
  const { currentUser } = useContext(AppContext);

  const navigationItems = [
    {
      section: "Main",
      items: [
        { name: "Dashboard", href: "/", icon: LayoutDashboard },
        { name: "My Learning", href: "/my-learning", icon: GraduationCap },
        { name: "Course Catalog", href: "/catalog", icon: BookOpen },
        { name: "Learning Paths", href: "/learning-paths", icon: FlagTriangleRight },
        { name: "Certificates", href: "/certificates", icon: Award }
      ]
    },
    {
      section: "Administration",
      items: [
        { name: "Users", href: "/users", icon: Users },
        { name: "Reports", href: "/reports", icon: BarChart },
        { name: "Content Management", href: "/content", icon: Layers },
        { name: "Settings", href: "/settings", icon: Settings }
      ]
    }
  ];

  return (
    <aside className={cn(
      "bg-white h-full border-r border-secondary-200 shadow-sm flex flex-col transition-all duration-300 ease-in-out",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="p-4 border-b border-secondary-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-9 h-9 rounded mr-3 bg-primary-700 flex items-center justify-center text-white">
            <GraduationCap size={24} />
          </div>
          {!collapsed && <h1 className="text-xl font-semibold text-primary-700">LMS Platform</h1>}
        </div>
        <button 
          className="text-secondary-500 hover:text-secondary-700"
          onClick={toggleSidebar}
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="overflow-y-auto flex-1">
        <nav className="px-2 py-4">
          {navigationItems.map((section) => (
            <div key={section.section} className="mb-2">
              {!collapsed && (
                <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wider px-3 mb-2">
                  {section.section}
                </div>
              )}
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1",
                    location === item.href 
                      ? "active bg-primary-50 text-primary-700 border-l-4 border-primary-600" 
                      : "text-secondary-900 hover:bg-primary-50"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3",
                    location === item.href ? "text-primary-600" : "text-secondary-500"
                  )} size={20} />
                  {!collapsed && item.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-secondary-200">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-secondary-200 flex items-center justify-center overflow-hidden flex-shrink-0">
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-secondary-500 text-lg font-semibold">
                {currentUser.name.charAt(0)}
              </span>
            )}
          </div>
          {!collapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium text-secondary-900">{currentUser.name}</div>
              <div className="text-xs text-secondary-500">{currentUser.role}</div>
            </div>
          )}
          <button className="ml-auto text-secondary-500 hover:text-secondary-700">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
