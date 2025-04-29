import { createContext, ReactNode, useState, useEffect } from "react";
import { User, Course, LearningPath, Certificate, RecommendedCourse, UpcomingActivity } from "@/lib/types";
import { 
  mockUser, 
  mockCourses, 
  mockLearningPaths, 
  mockCertificates,
  mockRecommendedCourses,
  mockUpcomingActivities
} from "@/data/mockData";

interface AppContextType {
  currentUser: User;
  courses: Course[];
  inProgressCourses: Course[];
  completedCourses: Course[];
  recommendedCourses: RecommendedCourse[];
  upcomingActivities: UpcomingActivity[];
  learningPaths: LearningPath[];
  certificates: Certificate[];
  getCourseById: (id: string) => Course | undefined;
  getLearningPathById: (id: string) => LearningPath | undefined;
  // Stats
  coursesInProgress: number;
  coursesCompleted: number;
  certificatesEarned: number;
}

export const AppContext = createContext<AppContextType>({
  currentUser: mockUser,
  courses: [],
  inProgressCourses: [],
  completedCourses: [],
  recommendedCourses: [],
  upcomingActivities: [],
  learningPaths: [],
  certificates: [],
  getCourseById: () => undefined,
  getLearningPathById: () => undefined,
  coursesInProgress: 0,
  coursesCompleted: 0,
  certificatesEarned: 0,
});

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [inProgressCourses, setInProgressCourses] = useState<Course[]>([]);
  const [completedCourses, setCompletedCourses] = useState<Course[]>([]);
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [recommendedCourses, setRecommendedCourses] = useState<RecommendedCourse[]>([]);
  const [upcomingActivities, setUpcomingActivities] = useState<UpcomingActivity[]>([]);

  useEffect(() => {
    // In a real application, this would fetch data from an API
    setCourses(mockCourses);
    setLearningPaths(mockLearningPaths);
    setCertificates(mockCertificates);
    setRecommendedCourses(mockRecommendedCourses);
    setUpcomingActivities(mockUpcomingActivities);
    
    // Filter courses
    setInProgressCourses(mockCourses.filter(course => course.progress > 0 && course.progress < 100));
    setCompletedCourses(mockCourses.filter(course => course.progress === 100));
  }, []);

  const getCourseById = (id: string): Course | undefined => {
    return courses.find(course => course.id === id);
  };

  const getLearningPathById = (id: string): LearningPath | undefined => {
    return learningPaths.find(path => path.id === id);
  };

  return (
    <AppContext.Provider value={{
      currentUser: mockUser,
      courses,
      inProgressCourses,
      completedCourses,
      recommendedCourses,
      upcomingActivities,
      learningPaths,
      certificates,
      getCourseById,
      getLearningPathById,
      coursesInProgress: inProgressCourses.length,
      coursesCompleted: completedCourses.length,
      certificatesEarned: certificates.length,
    }}>
      {children}
    </AppContext.Provider>
  );
}
