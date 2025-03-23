
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="heading-xl mb-6 animate-slide-down">
            <span className="text-solar-red">4</span>0<span className="text-solar-red">4</span>
          </h1>
          
          <p className="subtitle mb-8 animate-slide-down" style={{ animationDelay: '0.1s' }}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/" 
              className="solar-button-primary inline-flex items-center"
            >
              <MoveLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
