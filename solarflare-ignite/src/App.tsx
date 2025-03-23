import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GridSystems from "./pages/GridSystems";
import OffGridSystems from "./pages/OffGridSystems";
import HybridSystems from "./pages/HybridSystems";
import SolarPumps from "./pages/SolarPumps";
import { useEffect } from "react";
import WhatsAppButton from "./components/WhatsappButton";

const queryClient = new QueryClient();

// Create a separate component for route content to use the useLocation hook
const AppRoutes = () => {
  const location = useLocation();

  // Reset scroll position and reinitialize animations when route changes
  useEffect(() => {
    window.scrollTo(0, 0);

    // Remove any existing 'animated' classes before reinitializing
    document.querySelectorAll('.animate-on-scroll.animated').forEach(el => {
      el.classList.remove('animated');
    });

    // Initialize the intersection observer for animations
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Small timeout to ensure the DOM has updated with the new route content
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [location.pathname]); // Re-run when the route changes

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/grid" element={<GridSystems />} />
      <Route path="/services/off-grid" element={<OffGridSystems />} />
      <Route path="/services/hybrid" element={<HybridSystems />} />
      <Route path="/services/solar-pumps" element={<SolarPumps />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner position="bottom-center" />
          <BrowserRouter>
            {/* WhatsAppButton is placed outside Routes so it appears on all pages */}
            <WhatsAppButton />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;