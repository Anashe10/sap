import { 
  User, 
  Course, 
  LearningPath, 
  Certificate, 
  RecommendedCourse,
  UpcomingActivity 
} from "@/lib/types";
import { CalendarClock, FileText, TestTube, LucideIcon } from "lucide-react";

export const mockUser: User = {
  id: "user1",
  name: "John Davidson",
  email: "john.davidson@example.com",
  role: "Administrator",
  department: "Information Technology",
  jobTitle: "IT Manager"
};

export const mockCourses: Course[] = [
  {
    id: "course1",
    title: "Web Development Fundamentals",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=240&q=80",
    category: "Web Development",
    categoryColor: "bg-primary-100 text-primary-800",
    level: "Intermediate",
    duration: "10h 30m",
    progress: 68,
    enrolledCount: 1540,
    lastUpdated: "March 15, 2023",
    completedUnits: 16,
    totalUnits: 24,
    currentUnit: "JavaScript DOM Manipulation",
    modules: [
      {
        id: "module1",
        title: "Introduction to HTML",
        duration: "2h 15m",
        units: [
          {
            id: "unit1",
            title: "HTML Document Structure",
            duration: "15m",
            type: "Video",
            completed: true
          },
          {
            id: "unit2",
            title: "HTML Tags and Elements",
            duration: "20m",
            type: "Video",
            completed: true
          },
          {
            id: "unit3",
            title: "HTML Forms",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit4",
            title: "HTML Best Practices",
            duration: "25m",
            type: "Video",
            completed: true
          },
          {
            id: "unit5",
            title: "HTML Practice Assignment",
            duration: "45m",
            type: "Assignment",
            completed: true
          }
        ]
      },
      {
        id: "module2",
        title: "CSS Styling",
        duration: "3h 45m",
        units: [
          {
            id: "unit6",
            title: "CSS Selectors",
            duration: "25m",
            type: "Video",
            completed: true
          },
          {
            id: "unit7",
            title: "CSS Box Model",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit8",
            title: "CSS Flexbox Layout",
            duration: "40m",
            type: "Video",
            completed: true
          },
          {
            id: "unit9",
            title: "CSS Grid Layout",
            duration: "40m",
            type: "Video",
            completed: true
          },
          {
            id: "unit10",
            title: "Responsive Design with CSS",
            duration: "35m",
            type: "Video",
            completed: false
          },
          {
            id: "unit11",
            title: "CSS Animations",
            duration: "30m",
            type: "Video",
            completed: false
          },
          {
            id: "unit12",
            title: "CSS Practice Assignment",
            duration: "45m",
            type: "Assignment",
            completed: false
          }
        ]
      },
      {
        id: "module3",
        title: "JavaScript Basics",
        duration: "4h 30m",
        units: [
          {
            id: "unit13",
            title: "JavaScript Syntax",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit14",
            title: "Variables and Data Types",
            duration: "25m",
            type: "Video",
            completed: true
          },
          {
            id: "unit15",
            title: "Functions and Scope",
            duration: "35m",
            type: "Video",
            completed: true
          },
          {
            id: "unit16",
            title: "DOM Manipulation",
            duration: "40m",
            type: "Video",
            completed: false
          },
          {
            id: "unit17",
            title: "Event Handling",
            duration: "30m",
            type: "Video",
            completed: false
          },
          {
            id: "unit18",
            title: "JavaScript Practice Assignment",
            duration: "1h",
            type: "Assignment",
            completed: false
          },
          {
            id: "unit19",
            title: "JavaScript Final Quiz",
            duration: "30m",
            type: "Quiz",
            completed: false
          }
        ]
      }
    ],
    prerequisites: [
      "Basic computer skills",
      "Understanding of internet concepts",
      "Text editor installed on your computer"
    ],
    learningObjectives: [
      "Create well-structured HTML documents",
      "Style web pages using CSS",
      "Implement interactive features with JavaScript",
      "Build responsive web pages",
      "Debug web development code",
      "Deploy a simple website"
    ],
    materials: [
      {
        type: "pdf",
        title: "HTML5 Cheat Sheet",
        description: "Quick reference guide for HTML5 tags and attributes"
      },
      {
        type: "pdf",
        title: "CSS Properties Reference",
        description: "Comprehensive list of CSS properties and values"
      },
      {
        type: "video",
        title: "JavaScript Debugging Techniques",
        description: "Supplementary video on debugging JavaScript code"
      },
      {
        type: "doc",
        title: "Web Development Best Practices",
        description: "Document outlining industry best practices"
      }
    ],
    instructors: [
      {
        id: "instructor1",
        name: "Sarah Johnson",
        title: "Senior Web Developer",
        bio: "Sarah has over 10 years of experience in web development and has worked with major tech companies."
      },
      {
        id: "instructor2",
        name: "Michael Chen",
        title: "UI/UX Designer",
        bio: "Michael specializes in creating user-friendly interfaces and has a background in graphic design."
      }
    ]
  },
  {
    id: "course2",
    title: "Data Analysis with Python",
    description: "Master data analysis techniques using Python, pandas, and visualization libraries.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=240&q=80",
    category: "Data Science",
    categoryColor: "bg-info/10 text-info",
    level: "Advanced",
    duration: "12h 45m",
    progress: 35,
    enrolledCount: 980,
    lastUpdated: "April 10, 2023",
    completedUnits: 8,
    totalUnits: 22,
    currentUnit: "Data Cleaning Techniques",
    modules: [
      {
        id: "module1",
        title: "Introduction to Python for Data Analysis",
        duration: "3h 15m",
        units: [
          {
            id: "unit1",
            title: "Python Basics Review",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit2",
            title: "NumPy Fundamentals",
            duration: "45m",
            type: "Video",
            completed: true
          },
          {
            id: "unit3",
            title: "Introduction to Pandas",
            duration: "50m",
            type: "Video",
            completed: true
          },
          {
            id: "unit4",
            title: "Jupyter Notebooks",
            duration: "25m",
            type: "Video",
            completed: true
          },
          {
            id: "unit5",
            title: "Python Environment Setup",
            duration: "45m",
            type: "Lab",
            completed: true
          }
        ]
      },
      {
        id: "module2",
        title: "Data Manipulation with Pandas",
        duration: "4h 30m",
        units: [
          {
            id: "unit6",
            title: "Pandas DataFrames",
            duration: "40m",
            type: "Video",
            completed: true
          },
          {
            id: "unit7",
            title: "Data Selection and Indexing",
            duration: "35m",
            type: "Video",
            completed: true
          },
          {
            id: "unit8",
            title: "Data Cleaning Techniques",
            duration: "45m",
            type: "Video",
            completed: false
          },
          {
            id: "unit9",
            title: "Data Transformation",
            duration: "50m",
            type: "Video",
            completed: false
          },
          {
            id: "unit10",
            title: "Handling Missing Data",
            duration: "30m",
            type: "Video",
            completed: false
          },
          {
            id: "unit11",
            title: "Pandas Practice Assignment",
            duration: "1h 10m",
            type: "Assignment",
            completed: false
          }
        ]
      },
      {
        id: "module3",
        title: "Data Visualization",
        duration: "3h",
        units: [
          {
            id: "unit12",
            title: "Matplotlib Basics",
            duration: "40m",
            type: "Video",
            completed: false
          },
          {
            id: "unit13",
            title: "Seaborn for Statistical Visualizations",
            duration: "45m",
            type: "Video",
            completed: false
          },
          {
            id: "unit14",
            title: "Interactive Visualizations with Plotly",
            duration: "35m",
            type: "Video",
            completed: false
          },
          {
            id: "unit15",
            title: "Creating Dashboard-style Visualizations",
            duration: "30m",
            type: "Video",
            completed: false
          },
          {
            id: "unit16",
            title: "Visualization Practice Assignment",
            duration: "30m",
            type: "Assignment",
            completed: false
          }
        ]
      },
      {
        id: "module4",
        title: "Advanced Data Analysis",
        duration: "2h",
        units: [
          {
            id: "unit17",
            title: "Statistical Analysis with Python",
            duration: "35m",
            type: "Video",
            completed: false
          },
          {
            id: "unit18",
            title: "Time Series Analysis",
            duration: "45m",
            type: "Video",
            completed: false
          },
          {
            id: "unit19",
            title: "Working with Large Datasets",
            duration: "30m",
            type: "Video",
            completed: false
          },
          {
            id: "unit20",
            title: "Final Project",
            duration: "10m",
            type: "Project Brief",
            completed: false
          }
        ]
      }
    ],
    prerequisites: [
      "Basic Python programming knowledge",
      "Understanding of basic statistical concepts",
      "Python environment (Anaconda recommended)"
    ],
    learningObjectives: [
      "Import, clean, and manipulate data using Pandas",
      "Create insightful visualizations with Matplotlib and Seaborn",
      "Perform statistical analysis on datasets",
      "Build interactive dashboards",
      "Apply data analysis techniques to real-world problems",
      "Generate actionable insights from data"
    ],
    materials: [
      {
        type: "pdf",
        title: "Pandas Cheat Sheet",
        description: "Quick reference for common Pandas operations"
      },
      {
        type: "doc",
        title: "Sample Datasets",
        description: "Collection of datasets for practice"
      },
      {
        type: "pdf",
        title: "Visualization Best Practices",
        description: "Guide to creating effective data visualizations"
      }
    ],
    instructors: [
      {
        id: "instructor3",
        name: "David Wilson",
        title: "Data Scientist",
        bio: "David has worked as a data scientist for 8 years and specializes in Python-based data analysis."
      }
    ]
  },
  {
    id: "course3",
    title: "Cloud Computing Essentials",
    description: "Learn about cloud architectures, services, and deployment models.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=240&q=80",
    category: "Cloud Computing",
    categoryColor: "bg-secondary-100 text-secondary-800",
    level: "Beginner",
    duration: "8h 15m",
    progress: 82,
    enrolledCount: 1250,
    lastUpdated: "May 25, 2023",
    completedUnits: 12,
    totalUnits: 15,
    currentUnit: "Cloud Security Best Practices",
    modules: [
      {
        id: "module1",
        title: "Introduction to Cloud Computing",
        duration: "2h",
        units: [
          {
            id: "unit1",
            title: "What is Cloud Computing?",
            duration: "20m",
            type: "Video",
            completed: true
          },
          {
            id: "unit2",
            title: "Cloud Service Models (IaaS, PaaS, SaaS)",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit3",
            title: "Cloud Deployment Models",
            duration: "25m",
            type: "Video",
            completed: true
          },
          {
            id: "unit4",
            title: "Benefits and Challenges of Cloud Computing",
            duration: "20m",
            type: "Video",
            completed: true
          },
          {
            id: "unit5",
            title: "Cloud Providers Overview",
            duration: "25m",
            type: "Video",
            completed: true
          }
        ]
      },
      {
        id: "module2",
        title: "Amazon Web Services (AWS) Fundamentals",
        duration: "3h 15m",
        units: [
          {
            id: "unit6",
            title: "AWS Console and Account Setup",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit7",
            title: "EC2 Instances",
            duration: "45m",
            type: "Video",
            completed: true
          },
          {
            id: "unit8",
            title: "S3 Storage",
            duration: "40m",
            type: "Video",
            completed: true
          },
          {
            id: "unit9",
            title: "RDS Databases",
            duration: "35m",
            type: "Video",
            completed: true
          },
          {
            id: "unit10",
            title: "AWS IAM and Security",
            duration: "45m",
            type: "Video",
            completed: true
          }
        ]
      },
      {
        id: "module3",
        title: "Cloud Security and Compliance",
        duration: "3h",
        units: [
          {
            id: "unit11",
            title: "Cloud Security Fundamentals",
            duration: "35m",
            type: "Video",
            completed: true
          },
          {
            id: "unit12",
            title: "Identity and Access Management",
            duration: "30m",
            type: "Video",
            completed: true
          },
          {
            id: "unit13",
            title: "Cloud Security Best Practices",
            duration: "40m",
            type: "Video",
            completed: false
          },
          {
            id: "unit14",
            title: "Compliance in the Cloud",
            duration: "35m",
            type: "Video",
            completed: false
          },
          {
            id: "unit15",
            title: "Cloud Security Assessment",
            duration: "40m",
            type: "Quiz",
            completed: false
          }
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of IT infrastructure",
      "Familiarity with operating systems",
      "Basic networking knowledge"
    ],
    learningObjectives: [
      "Understand cloud computing concepts and terminology",
      "Compare different cloud service and deployment models",
      "Create and manage resources in AWS",
      "Implement basic cloud security measures",
      "Make informed decisions about cloud adoption",
      "Deploy applications to the cloud"
    ],
    materials: [
      {
        type: "pdf",
        title: "Cloud Computing Reference Guide",
        description: "Comprehensive reference for cloud computing concepts"
      },
      {
        type: "pdf",
        title: "AWS Services Cheat Sheet",
        description: "Quick reference for common AWS services"
      },
      {
        type: "doc",
        title: "Cloud Security Checklist",
        description: "Security best practices for cloud deployments"
      }
    ],
    instructors: [
      {
        id: "instructor4",
        name: "Jennifer Lee",
        title: "Cloud Solutions Architect",
        bio: "Jennifer has designed and implemented cloud solutions for Fortune 500 companies."
      },
      {
        id: "instructor5",
        name: "Robert Martinez",
        title: "Cloud Security Specialist",
        bio: "Robert specializes in securing cloud environments and compliance."
      }
    ]
  }
];

export const mockLearningPaths: LearningPath[] = [
  {
    id: "path1",
    title: "Full Stack Developer",
    description: "Master front-end and back-end development skills",
    longDescription: "This comprehensive learning path will take you from a beginner to a proficient full-stack developer. You'll learn both front-end and back-end technologies, as well as how to integrate them to build complete web applications. The curriculum covers HTML, CSS, JavaScript, React.js, Node.js, databases, and deployment techniques. By the end of this path, you'll be able to design, develop, and deploy full-stack web applications.",
    color: "bg-primary-700",
    textColor: "text-primary-100",
    duration: "40+ hours",
    enrolledCount: 2850,
    courses: [
      {
        id: "course1",
        title: "Web Development Fundamentals",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
        duration: "10h 30m",
        level: "Intermediate",
        category: "Web Development",
        categoryColor: "bg-primary-100 text-primary-800",
        progress: 68,
        completed: false
      },
      {
        id: "path1-course2",
        title: "JavaScript Advanced Concepts",
        description: "Deep dive into advanced JavaScript concepts including closures, prototypes, and async programming.",
        duration: "8h 15m",
        level: "Intermediate",
        category: "Web Development",
        categoryColor: "bg-primary-100 text-primary-800",
        progress: 100,
        completed: true
      },
      {
        id: "path1-course3",
        title: "React.js Essentials",
        description: "Build interactive user interfaces with React.js, the popular JavaScript library.",
        duration: "9h 45m",
        level: "Intermediate",
        category: "Web Development",
        categoryColor: "bg-primary-100 text-primary-800",
        progress: 0,
        completed: false
      },
      {
        id: "path1-course4",
        title: "Node.js and Express",
        description: "Create server-side applications using Node.js and Express framework.",
        duration: "7h 30m",
        level: "Intermediate",
        category: "Web Development",
        categoryColor: "bg-primary-100 text-primary-800",
        progress: 0,
        completed: false
      },
      {
        id: "path1-course5",
        title: "Database Integration",
        description: "Learn to integrate SQL and NoSQL databases into your web applications.",
        duration: "6h 20m",
        level: "Intermediate",
        category: "Databases",
        categoryColor: "bg-secondary-100 text-secondary-800",
        progress: 0,
        completed: false
      },
      {
        id: "path1-course6",
        title: "Full Stack Project",
        description: "Apply your skills to build a complete full stack application.",
        duration: "8h",
        level: "Advanced",
        category: "Web Development",
        categoryColor: "bg-primary-100 text-primary-800",
        progress: 0,
        completed: false
      }
    ],
    learningObjectives: [
      "Build responsive and interactive front-end interfaces",
      "Create RESTful APIs with Node.js and Express",
      "Integrate databases with web applications",
      "Implement authentication and authorization",
      "Deploy full-stack applications to production",
      "Apply best practices for web development"
    ],
    targetAudience: [
      "Aspiring web developers",
      "Front-end developers looking to expand to back-end",
      "Back-end developers looking to learn front-end",
      "Software engineers transitioning to web development"
    ],
    skills: [
      "HTML/CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"
    ],
    benefits: [
      "Build complete web applications from scratch",
      "Create a professional portfolio of projects",
      "Qualify for full-stack developer positions",
      "Develop both client and server-side skills"
    ]
  },
  {
    id: "path2",
    title: "Data Science",
    description: "Build a career in data science and analytics",
    longDescription: "This data science learning path provides a structured approach to mastering the skills needed for a career in data science and analytics. You'll progress from foundational data analysis to advanced machine learning techniques. The curriculum includes Python programming, data manipulation, statistical analysis, visualization, machine learning algorithms, and big data technologies. By completing this path, you'll be equipped with the skills needed for various data science roles.",
    color: "bg-info",
    textColor: "text-info/80",
    duration: "35+ hours",
    enrolledCount: 1640,
    courses: [
      {
        id: "course2",
        title: "Data Analysis with Python",
        description: "Master data analysis techniques using Python, pandas, and visualization libraries.",
        duration: "12h 45m",
        level: "Advanced",
        category: "Data Science",
        categoryColor: "bg-info/10 text-info",
        progress: 35,
        completed: false
      },
      {
        id: "path2-course2",
        title: "Statistics for Data Science",
        description: "Learn essential statistical concepts and methods for data analysis.",
        duration: "6h 30m",
        level: "Intermediate",
        category: "Data Science",
        categoryColor: "bg-info/10 text-info",
        progress: 0,
        completed: false
      },
      {
        id: "path2-course3",
        title: "Machine Learning Fundamentals",
        description: "Introduction to machine learning algorithms and their applications.",
        duration: "9h 15m",
        level: "Advanced",
        category: "AI & ML",
        categoryColor: "bg-info/10 text-info",
        progress: 0,
        completed: false
      },
      {
        id: "path2-course4",
        title: "Big Data Technologies",
        description: "Work with large datasets using big data tools and frameworks.",
        duration: "7h",
        level: "Advanced",
        category: "Data Science",
        categoryColor: "bg-info/10 text-info",
        progress: 0,
        completed: false
      },
      {
        id: "path2-course5",
        title: "Data Science Capstone Project",
        description: "Apply data science techniques to solve a real-world problem.",
        duration: "8h",
        level: "Advanced",
        category: "Data Science",
        categoryColor: "bg-info/10 text-info",
        progress: 0,
        completed: false
      }
    ],
    learningObjectives: [
      "Perform data cleaning and preprocessing",
      "Apply statistical methods to analyze data",
      "Create insightful data visualizations",
      "Build and evaluate machine learning models",
      "Work with large-scale datasets",
      "Communicate data insights effectively"
    ],
    targetAudience: [
      "Aspiring data scientists",
      "Analysts looking to upgrade their skills",
      "Software developers interested in data science",
      "Business professionals needing data skills"
    ],
    skills: [
      "Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Statistical Analysis", "Machine Learning", "Data Visualization"
    ],
    benefits: [
      "Develop in-demand data science skills",
      "Build a portfolio of data projects",
      "Qualify for data scientist positions",
      "Apply data-driven decision making"
    ]
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: "CERT-WD-2023-06-1254",
    title: "Web Development Essentials",
    issueDate: "2023-06-15",
    status: "Valid",
    issuer: {
      name: "Tech Academy",
      logo: "https://via.placeholder.com/40"
    },
    downloadHandler: () => console.log("Downloading Web Development Essentials certificate")
  },
  {
    id: "CERT-JS-2023-04-0872",
    title: "JavaScript Professional",
    issueDate: "2023-04-22",
    status: "Valid",
    issuer: {
      name: "Code Institute",
      logo: "https://via.placeholder.com/40"
    },
    downloadHandler: () => console.log("Downloading JavaScript Professional certificate")
  },
  {
    id: "CERT-PY-2023-02-0541",
    title: "Python Programming",
    issueDate: "2023-02-08",
    status: "Valid",
    issuer: {
      name: "DataTech Academy",
      logo: "https://via.placeholder.com/40"
    },
    downloadHandler: () => console.log("Downloading Python Programming certificate")
  }
];

export const mockRecommendedCourses: RecommendedCourse[] = [
  {
    id: "rec1",
    title: "Project Management Fundamentals",
    description: "Learn the basics of project management methodologies, tools, and best practices.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
    duration: "5h 20m",
    category: "Management",
    categoryColor: "bg-secondary-100 text-secondary-800",
    rating: 4.5
  },
  {
    id: "rec2",
    title: "Machine Learning Basics",
    description: "Introduction to machine learning concepts, algorithms, and practical applications.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
    duration: "8h 45m",
    category: "AI & ML",
    categoryColor: "bg-info/10 text-info",
    rating: 4.0
  },
  {
    id: "rec3",
    title: "DevOps for Beginners",
    description: "Learn DevOps principles, CI/CD, and infrastructure as code concepts.",
    image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80",
    duration: "6h 10m",
    category: "DevOps",
    categoryColor: "bg-secondary-100 text-secondary-800",
    rating: 5.0
  }
];

export const mockUpcomingActivities: UpcomingActivity[] = [
  {
    id: "activity1",
    title: "Web Development Workshop",
    dateTime: "Tomorrow, 10:00 AM - 12:00 PM",
    type: "event",
    icon: CalendarClock
  },
  {
    id: "activity2",
    title: "Project Submission Deadline",
    dateTime: "Friday, 11:59 PM",
    type: "assignment",
    icon: FileText
  },
  {
    id: "activity3",
    title: "Python Assessment",
    dateTime: "Next Monday, 2:00 PM",
    type: "assessment",
    icon: TestTube
  }
];
