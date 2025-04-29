import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import LearningPathList from "@/components/learningpaths/LearningPathList";

export default function LearningPaths() {
  const { learningPaths } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Learning Paths</h1>
        <p className="text-secondary-600">Structured learning journeys to help you achieve your career goals.</p>
      </div>
      
      <LearningPathList learningPaths={learningPaths} />
    </div>
  );
}
