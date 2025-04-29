import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import CourseList from "@/components/courses/CourseList";

export default function CourseCatalog() {
  const { courses } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Course Catalog</h1>
        <p className="text-secondary-600">Browse our comprehensive collection of courses across various domains.</p>
      </div>
      
      <CourseList courses={courses} showFilters={true} />
    </div>
  );
}
