
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HeroCarouselProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
  children?: React.ReactNode;
}

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    quote: "Harness the sun, power the future."
  },
  {
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    quote: "The sun shines for all—let's make the most of it."
  },
  {
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    quote: "Sustainable energy for a sustainable future."
  },
  {
    image: "https://images.unsplash.com/photo-1611365892117-baa49650139b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    quote: "Today's sunshine, tomorrow's power."
  }
];

export function HeroCarousel({
  title,
  subtitle,
  ctaText = "Get a Free Quote",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  className,
  children,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section
      className={cn(
        "min-h-[90vh] flex items-center justify-center relative overflow-hidden",
        "bg-cover bg-center text-white",
        className
      )}
    >
      <Carousel className="w-full h-full" selectedIndex={activeIndex} onSelect={setActiveIndex}>
        <CarouselContent className="h-[90vh]">
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: -1
                }}
              />
              
              <div className="container mx-auto px-4 py-12 md:py-20 z-10 flex flex-col items-center justify-center h-full">
                <div className="max-w-3xl mx-auto text-center">
                  <blockquote className="italic text-2xl mb-6 animate-slide-down">
                    "{slide.quote}"
                  </blockquote>
                  
                  <h1 className="heading-xl mb-6 animate-slide-down">
                    <span className="text-white">
                      {title.split(' ')[0]}{' '}
                    </span>
                    {title.split(' ').slice(1).join(' ')}
                  </h1>
                  
                  {subtitle && (
                    <p className="subtitle mb-8 animate-slide-down text-white/80" style={{ animationDelay: '0.1s' }}>
                      {subtitle}
                    </p>
                  )}
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {ctaText && (
                      <Link 
                        to={ctaLink}
                        className="solar-button-primary pulse-animation"
                      >
                        {ctaText} <ArrowRight className="inline-block h-4 w-4 ml-1" />
                      </Link>
                    )}
                    
                    {secondaryCtaText && secondaryCtaLink && (
                      <Link 
                        to={secondaryCtaLink}
                        className="solar-button bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
                      >
                        {secondaryCtaText}
                      </Link>
                    )}
                  </div>
                </div>
                
                {children && (
                  <div className="mt-12" style={{ animationDelay: '0.3s' }}>
                    {children}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-solar-red scale-125" : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white border-none" />
        <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white border-none" />
      </Carousel>
    </section>
  );
}
