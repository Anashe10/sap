import { useContext, useEffect } from "react";
import { useRoute } from "wouter";
import { AppContext } from "@/context/AppContext";
import LearningPathDetail from "@/components/learningpaths/LearningPathDetail";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LearningPathDetails() {
  const [match, params] = useRoute("/learning-path/:id");
  const { getLearningPathById } = useContext(AppContext);
  
  // Get learning path details using the ID from the URL
  const learningPath = params && params.id ? getLearningPathById(params.id) : undefined;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If learning path not found, display error message
  if (!learningPath) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-8 text-center">
          <AlertCircle className="h-12 w-12 text-error mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Learning Path Not Found</h1>
          <p className="text-secondary-600 mb-6">
            The learning path you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/learning-paths">
            <Button>
              Return to Learning Paths
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <LearningPathDetail learningPath={learningPath} />
    </div>
  );
}
