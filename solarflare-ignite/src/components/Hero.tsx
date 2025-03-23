import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import solar1 from "../assets/solar1.jpg";
import solar2 from "../assets/solar2.jpg";
import solar3 from "../assets/solar3.jpg";
import solar4 from "../assets/solar4.jpg";
const solarImages = [
 solar1,
 solar2,
 solar3,
 solar4
];

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Get a Free Quote',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  className,
  children,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solarImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(
        'min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center text-white',
        className
      )}
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${solarImages[currentIndex]})` }}
    >
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + solarImages.length) % solarImages.length)}
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % solarImages.length)}
      >
        <ChevronRight className="text-white" />
      </button>

      <div className="container mx-auto px-4 py-12 md:py-20 z-10 text-center">
        <h1 className="heading-xl mb-6 animate-slide-down">
          <span className="text-solar-red">{title.split(' ')[0]} </span>
          {title.split(' ').slice(1).join(' ')}
        </h1>
        
        {subtitle && <p className="subtitle mb-8 animate-slide-down text-white/80">{subtitle}</p>}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
          {ctaText && (
            <Link to={ctaLink} className="solar-button-primary pulse-animation">
              {ctaText} <ArrowRight className="inline-block h-4 w-4 ml-1" />
            </Link>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink} className="solar-button bg-white/15 text-white backdrop-blur-sm hover:bg-white/25">
              {secondaryCtaText}
            </Link>
          )}
        </div>
        
        {children && <div className="mt-12 animate-fade-in">{children}</div>}
      </div>
    </section>
  );
}
