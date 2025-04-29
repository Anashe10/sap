import { LearningPath } from "@/lib/types";
import { 
  Clock, 
  Calendar, 
  Users, 
  BookOpen, 
  CheckCircle,
  ArrowLeft,
  Star,
  Award
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LearningPathDetailProps {
  learningPath: LearningPath;
}

export default function LearningPathDetail({ learningPath }: LearningPathDetailProps) {
  const completedCourses = learningPath.courses.filter(course => course.completed).length;
  const totalCourses = learningPath.courses.length;
  const progressPercentage = Math.round((completedCourses / totalCourses) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
      {/* Header */}
      <div className={`${learningPath.color} p-8 relative`}>
        <Link href="/learning-paths">
          <a className="text-white mb-4 inline-flex items-center hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Learning Paths
          </a>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{learningPath.title}</h1>
        <p className={`${learningPath.textColor} text-lg max-w-3xl`}>{learningPath.description}</p>
        
        <div className="mt-6 flex flex-wrap gap-6">
          <div className={`flex items-center ${learningPath.textColor}`}>
            <Clock className="mr-2" size={18} />
            <div>
              <p className="font-medium text-white">Duration</p>
              <p className={learningPath.textColor}>{learningPath.duration}</p>
            </div>
          </div>
          
          <div className={`flex items-center ${learningPath.textColor}`}>
            <BookOpen className="mr-2" size={18} />
            <div>
              <p className="font-medium text-white">Courses</p>
              <p className={learningPath.textColor}>{totalCourses} courses</p>
            </div>
          </div>
          
          <div className={`flex items-center ${learningPath.textColor}`}>
            <Users className="mr-2" size={18} />
            <div>
              <p className="font-medium text-white">Enrolled</p>
              <p className={learningPath.textColor}>{learningPath.enrolledCount} learners</p>
            </div>
          </div>
          
          <div className={`flex items-center ${learningPath.textColor}`}>
            <Award className="mr-2" size={18} />
            <div>
              <p className="font-medium text-white">Certificate</p>
              <p className={learningPath.textColor}>Upon completion</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">About This Learning Path</h2>
              <p className="text-secondary-700 mb-6">{learningPath.longDescription || learningPath.description}</p>
              
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {learningPath.learningObjectives?.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{objective}</span>
                  </li>
                ))}
              </ul>
              
              {learningPath.targetAudience && (
                <>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Who This Path Is For</h3>
                  <ul className="list-disc pl-5 text-secondary-700 mb-6">
                    {learningPath.targetAudience.map((audience, index) => (
                      <li key={index} className="mb-1">{audience}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Courses in This Path</h2>
              <Accordion type="multiple" className="mb-6">
                {learningPath.courses.map((course, index) => (
                  <AccordionItem key={course.id} value={`course-${course.id}`}>
                    <AccordionTrigger className="hover:bg-secondary-50 px-4">
                      <div className="flex-1 flex items-center">
                        <div className="mr-3 w-6 h-6 rounded-full bg-secondary-200 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-secondary-900">{course.title}</div>
                          <div className="text-xs text-secondary-600 mt-1">
                            {course.duration} • {course.level}
                          </div>
                        </div>
                        <div className="ml-auto mr-4 flex items-center">
                          {course.completed ? (
                            <span className="flex items-center text-success font-medium text-sm">
                              <CheckCircle className="mr-1" size={16} />
                              Completed
                            </span>
                          ) : course.progress > 0 ? (
                            <span className="text-primary-600 font-medium text-sm">{course.progress}% completed</span>
                          ) : (
                            <span className="text-secondary-500 text-sm">Not started</span>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="pl-9">
                        <p className="text-secondary-700 mb-4">{course.description}</p>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className={`px-2 py-1 text-xs font-medium ${course.categoryColor} rounded-full`}>
                            {course.category}
                          </span>
                          <div className="flex items-center text-warning">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" />
                            <span className="ml-1 text-secondary-700 text-xs">(4.0)</span>
                          </div>
                        </div>
                        
                        {course.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium text-secondary-700">Progress</span>
                              <span className="text-primary-700 font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        )}
                        
                        <Link href={`/course/${course.id}`}>
                          <a className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                            {course.progress > 0 ? "Continue Course" : "Start Course"}
                            <ArrowLeft className="ml-1 rotate-180" size={14} />
                          </a>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-secondary-50 rounded-lg border border-secondary-200 p-6 sticky top-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-secondary-900">Path Progress</span>
                  <span className="text-sm font-medium text-primary-700">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2 mb-2" />
                <p className="text-xs text-secondary-600">
                  {completedCourses} of {totalCourses} courses completed
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-secondary-900 mb-3">Path Benefits</h3>
                <ul className="space-y-2">
                  {learningPath.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-secondary-900 mb-3">Skills You'll Gain</h3>
                <div className="flex flex-wrap gap-2">
                  {learningPath.skills?.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-secondary-200 text-secondary-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">
                {progressPercentage > 0 ? "Continue Learning Path" : "Start Learning Path"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
