import { useContext, useEffect } from "react";
import { useRoute } from "wouter";
import { AppContext } from "@/context/AppContext";
import CourseDetail from "@/components/courses/CourseDetail";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CourseDetails() {
  const [match, params] = useRoute("/course/:id");
  const { getCourseById } = useContext(AppContext);
  
  // Get course details using the ID from the URL
  const course = params && params.id ? getCourseById(params.id) : undefined;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If course not found, display error message
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-8 text-center">
          <AlertCircle className="h-12 w-12 text-error mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Course Not Found</h1>
          <p className="text-secondary-600 mb-6">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/catalog">
            <Button>
              Return to Course Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <CourseDetail course={course} />
    </div>
  );
}
