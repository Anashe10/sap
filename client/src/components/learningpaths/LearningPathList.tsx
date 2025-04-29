import { useState } from "react";
import { LearningPath } from "@/lib/types";
import LearningPathCard from "@/components/dashboard/LearningPathCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface LearningPathListProps {
  learningPaths: LearningPath[];
}

export default function LearningPathList({ learningPaths }: LearningPathListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPaths = learningPaths.filter(path => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        path.title.toLowerCase().includes(searchLower) ||
        path.description.toLowerCase().includes(searchLower) ||
        path.courses.some(course => course.title.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-secondary-400" />
          </div>
          <Input
            type="search"
            placeholder="Search learning paths..."
            className="pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {filteredPaths.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-secondary-200">
          <h3 className="text-lg font-medium text-secondary-900 mb-2">No learning paths found</h3>
          <p className="text-secondary-600">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPaths.map(path => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      )}
    </div>
  );
}
