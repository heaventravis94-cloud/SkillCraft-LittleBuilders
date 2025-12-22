import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // New Home page
import SkillLibrary from "./pages/SkillLibrary";
import CategoryDetail from "./pages/CategoryDetail";
import ActivityDetail from "./pages/ActivityDetail";
import Favorites from "./pages/Favorites"; // New Favorites page
import Progress from "./pages/Progress"; // New Progress page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as default */}
          <Route path="/library" element={<SkillLibrary />} /> {/* SkillLibrary now at /library */}
          <Route path="/categories/:categoryId" element={<CategoryDetail />} />
          <Route path="/activities/:activityId" element={<ActivityDetail />} />
          <Route path="/favorites" element={<Favorites />} /> {/* New route */}
          <Route path="/progress" element={<Progress />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;