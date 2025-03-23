
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialSlider({ testimonials, className }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle automatic sliding
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Navigation handlers
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div 
      className={cn("relative overflow-hidden py-12", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Testimonial Slider */}
      <div className="flex flex-col items-center">
        {/* Testimonial Content */}
        <div className="relative w-full max-w-3xl mx-auto px-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute top-0 left-0 right-0 transition-all duration-500 text-center",
                index === activeIndex 
                  ? "opacity-100 translate-x-0" 
                  : index < activeIndex 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              )}
              style={{ height: index === activeIndex ? 'auto' : 0, overflow: 'hidden' }}
            >
              {/* Quote Icon */}
              <div className="text-solar-red/20 text-6xl font-serif mb-4 select-none">"</div>
              
              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl font-medium mb-6">{testimonial.content}</p>
              
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className={cn(
                      "h-5 w-5 mx-0.5",
                      i < testimonial.rating ? "text-solar-red" : "text-muted"
                    )}
                  />
                ))}
              </div>
              
              {/* Author */}
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex 
                  ? "bg-solar-red scale-110" 
                  : "bg-muted hover:bg-muted-foreground"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-secondary hover:bg-solar-red hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-secondary hover:bg-solar-red hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
