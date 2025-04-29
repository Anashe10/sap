import { useState } from "react";
import CourseCard from "@/components/dashboard/CourseCard";
import CourseFilters from "./CourseFilters";
import { Course, CourseFilter } from "@/lib/types";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CourseListProps {
  courses: Course[];
  showFilters?: boolean;
}

export default function CourseList({ courses, showFilters = true }: CourseListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<CourseFilter>({
    categories: [],
    levels: [],
    duration: 'all',
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilters: CourseFilter) => {
    setFilters(newFilters);
  };

  const filteredCourses = courses.filter(course => {
    // Search filter
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(course.category)) {
      return false;
    }
    
    // Level filter
    if (filters.levels.length > 0 && !filters.levels.includes(course.level)) {
      return false;
    }
    
    // Duration filter
    if (filters.duration !== 'all') {
      const durationHours = parseInt(course.duration.split('h')[0]);
      
      if (filters.duration === 'short' && durationHours >= 5) return false;
      if (filters.duration === 'medium' && (durationHours < 5 || durationHours > 10)) return false;
      if (filters.duration === 'long' && durationHours <= 10) return false;
    }
    
    return true;
  });

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-secondary-400" />
          </div>
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {showFilters && (
          <CourseFilters 
            filters={filters} 
            onFilterChange={handleFilterChange} 
          />
        )}
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-secondary-200">
          <h3 className="text-lg font-medium text-secondary-900 mb-2">No courses found</h3>
          <p className="text-secondary-600">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
