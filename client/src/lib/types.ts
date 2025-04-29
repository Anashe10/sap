import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  department?: string;
  jobTitle?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  duration: string;
  units: CourseUnit[];
}

export interface CourseUnit {
  id: string;
  title: string;
  description?: string;
  duration: string;
  type?: string;
  completed: boolean;
}

export interface CourseMaterial {
  type: 'pdf' | 'video' | 'doc' | 'other';
  title: string;
  description: string;
  url?: string;
}

export interface CourseInstructor {
  id: string;
  name: string;
  title: string;
  bio?: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  level: string;
  duration: string;
  progress: number;
  modules: CourseModule[];
  prerequisites?: string[];
  learningObjectives?: string[];
  materials?: CourseMaterial[];
  instructors?: CourseInstructor[];
  enrolledCount: number;
  lastUpdated: string;
  completedUnits: number;
  totalUnits: number;
  currentUnit?: string;
}

export interface CourseFilter {
  categories: string[];
  levels: string[];
  duration: string;
}

export interface PathCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  categoryColor: string;
  progress: number;
  completed: boolean;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  color: string;
  textColor: string;
  duration: string;
  courses: PathCourse[];
  skills?: string[];
  learningObjectives?: string[];
  targetAudience?: string[];
  benefits?: string[];
  enrolledCount: number;
}

export interface CertificateIssuer {
  name: string;
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  expiryDate?: string;
  status: string;
  issuer: CertificateIssuer;
  downloadHandler?: () => void;
}

export interface RecommendedCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  categoryColor: string;
  rating: number;
}

export interface UpcomingActivity {
  id: string;
  title: string;
  dateTime: string;
  type: 'event' | 'assignment' | 'assessment';
  icon: LucideIcon;
}
