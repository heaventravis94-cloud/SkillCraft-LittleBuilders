import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillLibrary from "./pages/SkillLibrary";
import CategoryDetail from "./pages/CategoryDetail";
import ActivityDetail from "./pages/ActivityDetail";
import Favorites from "./pages/Favorites";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import TutorialDialog from "@/components/TutorialDialog"; // Import the new component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TutorialDialog /> {/* Render the tutorial dialog here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<SkillLibrary />} />
          <Route path="/categories/:categoryId" element={<CategoryDetail />} />
          <Route path="/activities/:activityId" element={<ActivityDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;