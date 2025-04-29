import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { CourseFilter } from "@/lib/types";

interface CourseFiltersProps {
  filters: CourseFilter;
  onFilterChange: (filters: CourseFilter) => void;
}

export default function CourseFilters({ filters, onFilterChange }: CourseFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Web Development",
    "Data Science",
    "Cloud Computing",
    "DevOps",
    "AI & ML",
    "Management",
    "Cybersecurity"
  ];

  const levels = [
    "Beginner",
    "Intermediate",
    "Advanced"
  ];

  const handleCategoryChange = (category: string) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({
      ...filters,
      categories: updatedCategories
    });
  };

  const handleLevelChange = (level: string) => {
    const updatedLevels = filters.levels.includes(level)
      ? filters.levels.filter(l => l !== level)
      : [...filters.levels, level];
    
    onFilterChange({
      ...filters,
      levels: updatedLevels
    });
  };

  const handleDurationChange = (duration: string) => {
    onFilterChange({
      ...filters,
      duration
    });
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      levels: [],
      duration: 'all'
    });
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.levels.length > 0 || filters.duration !== 'all';

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {filters.categories.length + filters.levels.length + (filters.duration !== 'all' ? 1 : 0)}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuLabel>Filter Courses</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-medium">Categories</DropdownMenuLabel>
            {categories.map(category => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-medium">Level</DropdownMenuLabel>
            {levels.map(level => (
              <DropdownMenuCheckboxItem
                key={level}
                checked={filters.levels.includes(level)}
                onCheckedChange={() => handleLevelChange(level)}
              >
                {level}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-medium">Duration</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={filters.duration} onValueChange={handleDurationChange}>
              <DropdownMenuRadioItem value="all">All durations</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="short">Short (&lt; 5 hours)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">Medium (5-10 hours)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="long">Long (&gt; 10 hours)</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
          
          {hasActiveFilters && (
            <>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
                  <X size={14} className="mr-2" />
                  Clear Filters
                </Button>
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Display active filters as badges */}
      <div className="flex flex-wrap gap-2">
        {filters.categories.map(category => (
          <Badge key={category} variant="outline" className="gap-1">
            {category}
            <X
              size={14}
              className="cursor-pointer"
              onClick={() => handleCategoryChange(category)}
            />
          </Badge>
        ))}
        
        {filters.levels.map(level => (
          <Badge key={level} variant="outline" className="gap-1">
            {level}
            <X
              size={14}
              className="cursor-pointer"
              onClick={() => handleLevelChange(level)}
            />
          </Badge>
        ))}
        
        {filters.duration !== 'all' && (
          <Badge variant="outline" className="gap-1">
            {filters.duration === 'short' && 'Short'}
            {filters.duration === 'medium' && 'Medium'}
            {filters.duration === 'long' && 'Long'}
            <X
              size={14}
              className="cursor-pointer"
              onClick={() => handleDurationChange('all')}
            />
          </Badge>
        )}
      </div>
    </div>
  );
}
