import { useContext } from "react";
import { Link } from "wouter";
import { 
  Search, 
  Clock,
  CalendarClock, 
  User, 
  Eye,
  ChevronRight
} from "lucide-react";
import { AppContext } from "@/context/AppContext";
import CourseCard from "@/components/dashboard/CourseCard";
import CertificateCard from "@/components/dashboard/CertificateCard";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { 
    currentUser,
    inProgressCourses,
    learningPaths,
    certificates,
  } = useContext(AppContext);

  return (
    <div className="bg-secondary-50 min-h-screen pb-8">
      {/* Hero Section */}
      <div className="bg-white py-5 px-6 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-secondary-900">Learning</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">New Learning Experience</span>
                <div className="w-11 h-6 bg-primary-500 rounded-full p-1 cursor-pointer">
                  <div className="bg-white w-4 h-4 rounded-full transform translate-x-5"></div>
                </div>
              </div>
              <button className="p-1 rounded-full hover:bg-secondary-100">
                <Eye size={20} className="text-secondary-600" />
              </button>
              <button className="p-1 rounded-full hover:bg-secondary-100">
                <User size={20} className="text-secondary-600" />
              </button>
              <div className="flex">
                <button className="p-1 rounded-l border border-secondary-300 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-600">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button className="p-1 rounded-r border-t border-b border-r border-secondary-300 bg-secondary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-600">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 relative">
            <input 
              type="text" 
              className="w-full py-2 px-4 border border-secondary-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm" 
              placeholder="Search for Learning" 
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="text-secondary-400" size={18} />
            </button>
          </div>
        </div>
      </div>


      
      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Banner */}
        <div className="mb-8 bg-white rounded-md overflow-hidden shadow-sm border border-secondary-200">
          <div className="flex">
            <div className="w-1/2 py-8 pl-10 pr-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-secondary-900 mb-3">Explore, Learn, and Unleash Your Full Potential</h2>
              <p className="text-secondary-600 mb-0">Achieve your goals and master new skills. Anytime, anywhere.</p>
            </div>
            <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')"}}>
            </div>
          </div>
        </div>
        
        {/* For You Today Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-secondary-900 mb-4">For You Today</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Assignments Card */}
            <div className="bg-white p-5 rounded-md shadow-sm border border-secondary-200">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-600 mr-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                  <line x1="8" y1="16" x2="16" y2="16"></line>
                  <line x1="8" y1="8" x2="16" y2="8"></line>
                </svg>
                <span className="font-medium text-secondary-800">Learning Assignments</span>
              </div>
              
              <div className="mt-3">
                <h3 className="font-semibold text-secondary-900">Changing a Flat Tire</h3>
                <div className="text-sm text-secondary-600 mt-1">Other</div>
                <div className="mt-2 bg-red-500 text-white text-xs inline-block px-2 py-1 rounded-sm">
                  12 days overdue
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Link href="/my-learning">
                  <div className="text-primary-600 hover:text-primary-700 text-sm cursor-pointer">
                    View All (3)
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Finish Your Profile Card */}
            <div className="bg-white p-5 rounded-md shadow-sm border border-secondary-200">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-600 mr-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="font-medium text-secondary-800">Finish Your Profile</span>
              </div>
              
              <div className="mt-3">
                <p className="text-secondary-800">You have completed <span className="font-medium">0%</span></p>
                <div className="mt-1 w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-sm text-secondary-500 mt-2">Why not update it now?</p>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Link href="/profile">
                  <div className="text-primary-600 hover:text-primary-700 text-sm cursor-pointer">
                    Edit Profile
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Required Learning Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-secondary-900">Required Learning</h2>
            <Link href="/my-learning">
              <div className="text-primary-600 hover:text-primary-700 text-sm font-medium cursor-pointer">
                View All (5)
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inProgressCourses.slice(0, 3).map(course => (
              <div key={course.id} className="bg-white p-5 rounded-md shadow-sm border border-secondary-200">
                <div className="mb-2">
                  {course.progress < 30 && (
                    <div className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-sm mb-2">
                      16 days overdue
                    </div>
                  )}
                  <h3 className="font-semibold text-secondary-900">{course.title}</h3>
                </div>
                <div className="text-sm text-secondary-600 mb-2">
                  {course.progress > 0 ? (
                    <div>
                      Due on {new Date().toLocaleDateString()}
                      <div className="flex items-center text-xs mt-1">
                        <span className="mr-1">{course.level}</span> • 
                        <Clock size={12} className="text-secondary-500 mx-1" /> 
                        {course.duration}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>Duration-Based Program</div>
                    </>
                  )}
                </div>
                
                {course.progress > 0 ? (
                  <Button variant="secondary" size="sm" className="mt-1">
                    Register
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" className="mt-1">
                    Continue Course
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Latest Bookmarks Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-secondary-900">Latest Bookmarks</h2>
            <Link href="/bookmarks">
              <div className="text-primary-600 hover:text-primary-700 text-sm font-medium cursor-pointer">
                View All (5)
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-md shadow-sm border border-secondary-200 overflow-hidden">
              <div className="flex items-start p-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Training" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary-900">Training ITEM</h3>
                  <div className="text-sm text-secondary-600">Instructor-Led with Online Content • 4h</div>
                </div>
                <div className="text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-secondary-200 overflow-hidden">
              <div className="flex items-start p-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Onboarding" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary-900">New Employee Onboarding Program</h3>
                  <div className="text-sm text-secondary-600">Program</div>
                </div>
                <div className="text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-secondary-200 overflow-hidden">
              <div className="flex items-start p-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="LMS Admin" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary-900">LMS Admin Training</h3>
                  <div className="text-sm text-secondary-600">Instructor-Led • 24 hours</div>
                </div>
                <div className="text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-secondary-900 mb-4">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="bg-blue-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="mt-2 text-sm font-medium">View My Calendar</span>
            </div>
            
            <div className="bg-red-500 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="mt-2 text-sm font-medium">View My Notices</span>
            </div>
            
            <div className="bg-teal-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-teal-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
                <path d="M8 21v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"></path>
              </svg>
              <span className="mt-2 text-sm font-medium">View Org Chart</span>
            </div>
            
            <div className="bg-indigo-500 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span className="mt-2 text-sm font-medium">View Favorite Reports</span>
            </div>
            
            <div className="bg-gray-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="mt-2 text-sm font-medium">View Admin Alerts</span>
            </div>
            
            <div className="bg-blue-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="10 15 13 12 10 9"></polyline>
                <polyline points="14 15 17 12 14 9"></polyline>
              </svg>
              <span className="mt-2 text-sm font-medium">Manage My Goals</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
            <div className="bg-fuchsia-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-fuchsia-700 transition-colors border-4 border-fuchsia-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <line x1="12" y1="6" x2="12" y2="10"></line>
                <line x1="12" y1="14" x2="12" y2="14"></line>
              </svg>
              <span className="mt-2 text-sm font-medium">View My Learning</span>
            </div>

            <div className="bg-cyan-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-cyan-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span className="mt-2 text-sm font-medium">View Reminders</span>
            </div>

            <div className="bg-purple-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-purple-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              <span className="mt-2 text-sm font-medium">View Favorites</span>
            </div>

            <div className="bg-fuchsia-600 rounded-md shadow-sm text-white p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-fuchsia-700 transition-colors border-4 border-fuchsia-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span className="mt-2 text-sm font-medium">View Learning Administration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
