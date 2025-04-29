import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import CourseList from "@/components/courses/CourseList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MyLearning() {
  const { inProgressCourses, completedCourses } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("in-progress");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">My Learning</h1>
        <p className="text-secondary-600">Track your progress and continue your learning journey.</p>
      </div>
      
      <Tabs defaultValue="in-progress" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full md:w-fit grid-cols-2">
          <TabsTrigger value="in-progress">
            In Progress ({inProgressCourses.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedCourses.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="in-progress" className="mt-6">
          {inProgressCourses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">No courses in progress</h3>
              <p className="text-secondary-600 mb-4">You haven't started any courses yet.</p>
              <a href="/catalog" className="text-primary-600 hover:text-primary-700 font-medium">
                Browse the catalog to find courses
              </a>
            </div>
          ) : (
            <CourseList courses={inProgressCourses} showFilters={false} />
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="mt-6">
          {completedCourses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-secondary-200">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">No completed courses</h3>
              <p className="text-secondary-600 mb-4">You haven't completed any courses yet.</p>
              <a href="/catalog" className="text-primary-600 hover:text-primary-700 font-medium">
                Browse the catalog to find courses
              </a>
            </div>
          ) : (
            <CourseList courses={completedCourses} showFilters={false} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
