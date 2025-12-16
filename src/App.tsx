import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AutoLeadCapture } from '@/components/LeadCaptureForm';
import Index from './pages/Index';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminLeads from './pages/admin/Leads';
// import Blog from "./pages/Blog";
// import Resources from "./pages/Resources";
// import StudentPortal from "./pages/StudentPortal";
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AutoLeadCapture />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/student-portal" element={<StudentPortal />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/leads"
            element={
              <ProtectedRoute>
                <AdminLeads />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
