import { useState } from "react";
import { Course, CourseModule } from "@/lib/types";
import { 
  Clock, 
  Calendar, 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle,
  ArrowLeft,
  Play
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

interface CourseDetailProps {
  course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
      {/* Course Header */}
      <div className="relative h-48 md:h-64 bg-secondary-800">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover opacity-60"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <Link href="/catalog">
            <a className="text-white mb-2 inline-flex items-center hover:underline">
              <ArrowLeft size={16} className="mr-1" />
              Back to Catalog
            </a>
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2 py-1 text-xs font-medium ${course.categoryColor} rounded-full`}>
              {course.category}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-secondary-100 text-secondary-800 rounded-full">
              {course.level}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{course.title}</h1>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">About This Course</h2>
                <p className="text-secondary-700 mb-6">{course.description}</p>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {course.learningObjectives?.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{objective}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Prerequisites</h3>
                <ul className="list-disc pl-5 text-secondary-700 mb-6">
                  {course.prerequisites?.map((prerequisite, index) => (
                    <li key={index} className="mb-1">{prerequisite}</li>
                  ))}
                </ul>
                
                {course.instructors && (
                  <>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">Instructors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.instructors.map((instructor, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-secondary-200 mr-3 overflow-hidden flex-shrink-0">
                            {instructor.avatar ? (
                              <img src={instructor.avatar} alt={instructor.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700 font-bold text-lg">
                                {instructor.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-secondary-900">{instructor.name}</h4>
                            <p className="text-sm text-secondary-600">{instructor.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
              
              <TabsContent value="content">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">Course Content</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{course.modules.length} modules • {course.modules.reduce((acc, module) => acc + module.units.length, 0)} lessons</span>
                    <span>{course.duration} total</span>
                  </div>
                </div>
                
                <Accordion type="multiple" className="mb-6">
                  {course.modules.map((module, index) => (
                    <CourseModuleItem 
                      key={module.id} 
                      module={module} 
                      moduleNumber={index + 1} 
                    />
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="materials">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">Course Materials</h2>
                
                {course.materials && course.materials.length > 0 ? (
                  <div className="space-y-4">
                    {course.materials.map((material, index) => (
                      <div key={index} className="flex items-center p-4 border border-secondary-200 rounded-md hover:bg-secondary-50">
                        <div className="mr-4 p-2 bg-secondary-100 rounded-md">
                          {material.type === 'pdf' && <BookOpen className="h-6 w-6 text-error" />}
                          {material.type === 'video' && <Play className="h-6 w-6 text-primary-600" />}
                          {material.type === 'doc' && <BookOpen className="h-6 w-6 text-primary-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-secondary-900">{material.title}</h4>
                          <p className="text-sm text-secondary-600">{material.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-secondary-600">No additional materials available for this course.</p>
                )}
              </TabsContent>
              
              <TabsContent value="discussion">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">Discussion Forum</h2>
                <div className="text-center p-8 border border-dashed border-secondary-300 rounded-md">
                  <p className="text-secondary-600 mb-4">Join the conversation about this course</p>
                  <Button>View Forum</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-secondary-50 rounded-lg border border-secondary-200 p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-secondary-900">Your Progress</span>
                  <span className="text-sm font-medium text-primary-700">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2 mb-2" />
                <p className="text-xs text-secondary-600">
                  {course.completedUnits} of {course.totalUnits} lessons completed
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Duration</p>
                    <p className="text-sm text-secondary-600">{course.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-secondary-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Level</p>
                    <p className="text-sm text-secondary-600">{course.level}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-secondary-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Certificate</p>
                    <p className="text-sm text-secondary-600">Upon completion</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-secondary-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Last Updated</p>
                    <p className="text-sm text-secondary-600">{course.lastUpdated}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-secondary-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Enrolled</p>
                    <p className="text-sm text-secondary-600">{course.enrolledCount} students</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mb-4">
                {course.progress > 0 ? "Continue Learning" : "Start Learning"}
              </Button>
              
              {course.progress > 0 && course.currentUnit && (
                <div className="text-center">
                  <p className="text-sm text-secondary-700 mb-1">Continue from:</p>
                  <p className="text-sm font-medium text-primary-700">{course.currentUnit}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CourseModuleItemProps {
  module: CourseModule;
  moduleNumber: number;
}

function CourseModuleItem({ module, moduleNumber }: CourseModuleItemProps) {
  // Calculate completion percentage for this module
  const completedUnits = module.units.filter(unit => unit.completed).length;
  const completionPercentage = Math.round((completedUnits / module.units.length) * 100);
  
  return (
    <AccordionItem value={`module-${module.id}`}>
      <AccordionTrigger className="hover:bg-secondary-50 px-4">
        <div className="flex-1 flex items-center">
          <div className="mr-3 text-sm font-medium text-secondary-600">
            Module {moduleNumber}:
          </div>
          <div className="flex-1">
            <div className="font-medium text-secondary-900">{module.title}</div>
            <div className="text-xs text-secondary-600 mt-1">
              {module.units.length} lessons • {module.duration}
            </div>
          </div>
          <div className="ml-auto mr-4 flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-secondary-200 flex items-center justify-center mr-2 text-xs font-medium">
              {completionPercentage}%
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <div className="pl-6 border-l border-secondary-200">
          {module.units.map((unit, index) => (
            <div 
              key={unit.id} 
              className={`py-3 flex items-start ${index !== module.units.length - 1 ? 'border-b border-secondary-200' : ''}`}
            >
              <div className="mr-3 flex-shrink-0 mt-0.5">
                {unit.completed ? (
                  <CheckCircle className="h-5 w-5 text-success" />
                ) : (
                  <Play className="h-5 w-5 text-primary-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-secondary-900">{unit.title}</p>
                <div className="flex items-center mt-1 text-xs text-secondary-600">
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {unit.duration}
                  </span>
                  {unit.type && (
                    <span className="ml-3 px-2 py-0.5 rounded-full bg-secondary-100">
                      {unit.type}
                    </span>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="sm" className="ml-2">
                {unit.completed ? "Review" : "Start"}
              </Button>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
