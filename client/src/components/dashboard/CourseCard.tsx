import { Clock, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Course } from "@/lib/types";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden flex flex-col">
      <div className="h-40 bg-secondary-200 relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white text-xs font-medium py-1 px-2 rounded-full shadow-sm">
          {course.modules.length} modules
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className={`px-2 py-1 text-xs font-medium ${course.categoryColor} rounded-full`}>
              {course.category}
            </span>
          </div>
          <h3 className="font-semibold text-secondary-900 mb-2">{course.title}</h3>
          <p className="text-secondary-600 text-sm mb-3 line-clamp-2">{course.description}</p>
          
          <div className="flex items-center text-xs text-secondary-500 mb-3">
            <span className="flex items-center mr-4">
              <Clock className="text-secondary-400 mr-1" size={14} />
              {course.duration}
            </span>
            <span className="flex items-center">
              <BookOpen className="text-secondary-400 mr-1" size={14} />
              {course.level}
            </span>
          </div>
        </div>
        
        <div>
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-secondary-700">Progress</span>
              <span className="text-primary-700 font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
          <Link href={`/course/${course.id}`}>
            <div className="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer">
              {course.progress > 0 ? "Continue" : "Start Learning"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
