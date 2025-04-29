import { Star, StarHalf } from "lucide-react";
import { RecommendedCourse as RecommendedCourseType } from "@/lib/types";

interface RecommendedCourseProps {
  course: RecommendedCourseType;
}

export default function RecommendedCourse({ course }: RecommendedCourseProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-warning" size={14} />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-warning" size={14} />);
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-secondary-300" size={14} />
      );
    }
    
    return stars;
  };

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-16 h-16 bg-secondary-200 rounded-md overflow-hidden mr-4">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-secondary-900 mb-1">{course.title}</h3>
            <span className="text-xs font-medium text-secondary-500">{course.duration}</span>
          </div>
          <p className="text-xs text-secondary-600 mb-2 line-clamp-1">{course.description}</p>
          <div className="flex items-center">
            <span className={`px-2 py-0.5 text-xs ${course.categoryColor} rounded-full mr-2`}>
              {course.category}
            </span>
            <div className="flex items-center">
              {renderStars(course.rating)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
