
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Battery, Activity, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ServiceCard({ id, title, description, icon, className }: ServiceCardProps) {
  // Map the service ID to the correct route path
  const getServicePath = (id: string) => {
    switch(id) {
      case 'grid': return '/services/grid';
      case 'off-grid': return '/services/off-grid';
      case 'hybrid': return '/services/hybrid';
      case 'pump': return '/services/solar-pumps';
      default: return `/services/${id}`;
    }
  };

  // Render the appropriate icon based on the icon string
  const getIcon = () => {
    switch (icon) {
      case 'zap':
        return <Zap className="h-6 w-6" />;
      case 'battery':
        return <Battery className="h-6 w-6" />;
      case 'activity':
        return <Activity className="h-6 w-6" />;
      case 'droplets':
        return <Droplets className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <div className={cn(
      "glass-card group",
      "transform transition-all duration-300 hover:-translate-y-2",
      className
    )}>
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-solar-red/10 text-solar-red mb-4 
                     transition-all duration-300 group-hover:bg-solar-red group-hover:text-white">
        {getIcon()}
      </div>
      
      {/* Content */}
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {/* Read More Link */}
      <div className="mt-auto">
        <Link 
          to={getServicePath(id)}
          className="inline-flex items-center text-solar-red group-hover:text-solar-red/80 transition-all duration-300"
        >
          Learn More 
          <ArrowRight className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 h-16 w-16 bg-solar-red/5 rounded-bl-3xl rounded-tr-xl 
                     transform transition-all duration-300 
                     group-hover:bg-solar-red/10 group-hover:w-20 group-hover:h-20">
      </div>
    </div>
  );
}
