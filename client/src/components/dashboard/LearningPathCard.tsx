import { Clock, BookOpen, CheckCircle, Circle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { LearningPath } from "@/lib/types";
import { Progress } from "@/components/ui/progress";

interface LearningPathCardProps {
  path: LearningPath;
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  const completedCourses = path.courses.filter(course => course.completed).length;
  const totalCourses = path.courses.length;
  const progressPercentage = Math.round((completedCourses / totalCourses) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/3 ${path.color} text-white p-6 flex flex-col justify-between`}>
          <div>
            <h3 className="font-bold text-lg mb-2">{path.title}</h3>
            <p className={`${path.textColor} text-sm`}>{path.description}</p>
          </div>
          <div className="mt-4">
            <div className={`flex items-center ${path.textColor} text-xs mb-1`}>
              <Clock className="mr-1" size={14} />
              {path.duration}
            </div>
            <div className={`flex items-center ${path.textColor} text-xs`}>
              <BookOpen className="mr-1" size={14} />
              {totalCourses} courses
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-secondary-900">Path Progress</span>
              <span className="text-sm font-medium text-primary-600">{completedCourses}/{totalCourses} courses</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-secondary-800 mb-2">Included Courses:</h4>
            <ul className="text-sm text-secondary-600 space-y-1">
              {path.courses.slice(0, 4).map(course => (
                <li key={course.id} className="flex items-center">
                  {course.completed ? (
                    <CheckCircle className="text-success mr-2" size={14} />
                  ) : (
                    <Circle className="text-primary-400 mr-2" size={14} />
                  )}
                  {course.title}
                </li>
              ))}
              {path.courses.length > 4 && (
                <li className="text-xs text-primary-600 mt-1">
                  +{path.courses.length - 4} more courses
                </li>
              )}
            </ul>
          </div>
          
          <Link href={`/learning-path/${path.id}`}>
            <a className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
              Continue Path <ArrowRight className="ml-1" size={16} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
