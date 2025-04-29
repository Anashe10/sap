import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import CourseCatalog from "@/pages/CourseCatalog";
import MyLearning from "@/pages/MyLearning";
import LearningPaths from "@/pages/LearningPaths";
import Certificates from "@/pages/Certificates";
import CourseDetails from "@/pages/CourseDetails";
import LearningPathDetails from "@/pages/LearningPathDetails";
import Layout from "@/components/layout/Layout";
import { AppProvider } from "@/context/AppContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/learning" component={Dashboard} />
      <Route path="/my-learning" component={MyLearning} />
      <Route path="/team" component={MyLearning} /> {/* Placeholder for team section */}
      <Route path="/classes" component={CourseCatalog} /> {/* Placeholder for classes section */}
      <Route path="/catalog" component={CourseCatalog} />
      <Route path="/learning-paths" component={LearningPaths} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/course/:id" component={CourseDetails} />
      <Route path="/learning-path/:id" component={LearningPathDetails} />
      <Route path="/admin" component={Dashboard} /> {/* Placeholder for admin section */}
      <Route path="/careers" component={Dashboard} /> {/* Placeholder for careers section */}
      <Route path="/company-info" component={Dashboard} /> {/* Placeholder for company info section */}
      <Route path="/development" component={Dashboard} /> {/* Placeholder for development section */}
      <Route path="/employee-files" component={Dashboard} /> {/* Placeholder for employee files section */}
      <Route path="/goals" component={Dashboard} /> {/* Placeholder for goals section */}
      <Route path="/bookmarks" component={Dashboard} /> {/* Placeholder for bookmarks section */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </AppProvider>
  );
}

export default App;
