import { useState, useContext } from "react";
import { 
  Search, 
  HelpCircle, 
  Bell, 
  ChevronDown,
  Heart,
  LayoutList,
  Menu
} from "lucide-react";
import { AppContext } from "@/context/AppContext";
import { Link } from "wouter";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivitiesMenuOpen, setIsActivitiesMenuOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isActivitiesMenuOpen) setIsActivitiesMenuOpen(false);
  };

  const toggleActivitiesMenu = () => {
    setIsActivitiesMenuOpen(!isActivitiesMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="bg-secondary-100 border-b border-secondary-200">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Heart className="text-primary-600 mr-2" size={24} fill="currentColor" />
              <span className="font-semibold text-lg text-secondary-900">Success Learn</span>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="ml-8">
            <div className="flex space-x-1">
              <div className="relative group">
                <button 
                  onClick={toggleMenu}
                  className="text-secondary-900 font-medium px-4 py-2 flex items-center"
                >
                  Home <ChevronDown className="ml-1" size={16} />
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 bg-white border border-secondary-200 shadow-md rounded-md w-48 py-1 z-10">
                    <Link href="/">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Home</div>
                    </Link>
                    <Link href="/admin">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Admin Center</div>
                    </Link>
                    <Link href="/careers">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Careers</div>
                    </Link>
                    <Link href="/company-info">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Company Info</div>
                    </Link>
                    <Link href="/development">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Development</div>
                    </Link>
                    <Link href="/employee-files">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Employee Files</div>
                    </Link>
                    <Link href="/goals">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 cursor-pointer">Goals</div>
                    </Link>
                    <Link href="/learning">
                      <div className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 bg-primary-50 cursor-pointer">Learning</div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and User Controls */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              className="w-64 py-2 px-4 rounded-full bg-white/80 border border-secondary-300 focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm" 
              placeholder="Search for actions or people" 
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="text-secondary-400" size={18} />
            </button>
          </div>
          
          <button className="relative p-1 text-secondary-500 hover:text-secondary-700 focus:outline-none">
            <Bell size={20} />
          </button>
          
          <button className="relative p-1 text-secondary-500 hover:text-secondary-700 focus:outline-none">
            <HelpCircle size={20} />
          </button>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white overflow-hidden">
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-medium">{currentUser.name.charAt(0)}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation */}
      <div className="bg-white px-6 py-1 border-t border-secondary-200">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="/learning">
              <div className="text-secondary-900 font-medium px-1 py-2 border-b-2 border-primary-600 cursor-pointer">My Learning</div>
            </Link>
            <Link href="/team">
              <div className="text-secondary-700 px-1 py-2 hover:text-secondary-900 border-b-2 border-transparent cursor-pointer">My Team</div>
            </Link>
            <Link href="/classes">
              <div className="text-secondary-700 px-1 py-2 hover:text-secondary-900 border-b-2 border-transparent cursor-pointer">My Classes</div>
            </Link>
          </div>
          
          {/* Activities Menu Button */}
          <div className="relative">
            <button 
              className="flex items-center text-secondary-700 hover:text-primary-600"
              onClick={toggleActivitiesMenu}
            >
              <LayoutList size={18} className="mr-1" />
              <Menu size={18} />
            </button>
            
            {/* Activities Menu Dropdown */}
            {isActivitiesMenuOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-secondary-200 shadow-md rounded-md w-64 py-1 z-20">
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Curricula</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">QuickGuides</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Learning History</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Collections</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Accomplishments</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Approvals</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Orders</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Reports</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Training Planner</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">External Learning Requests</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">SuccessFactors Web Site</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Options and Settings</div>
                <div className="text-secondary-700 hover:bg-secondary-50 px-4 py-2 cursor-pointer">Add to Learning History</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
