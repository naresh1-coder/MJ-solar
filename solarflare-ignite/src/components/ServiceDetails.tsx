
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  mainImage: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  nextService?: {
    id: string;
    title: string;
  };
  prevService?: {
    id: string;
    title: string;
  };
}

export function ServiceDetails({
  title,
  subtitle,
  description,
  icon,
  mainImage,
  sections,
  nextService,
  prevService
}: ServiceDetailsProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={mainImage}
      />
      
      {/* Main Content */}
      <section className="solar-section">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            {/* Introduction */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-solar-red text-white flex items-center justify-center">
                {icon}
              </div>
              <h2 className="heading-lg">{title}</h2>
            </div>
            
            <p className="text-lg mb-8">{description}</p>
            
            {/* CTA Box */}
            <div className="glass-card bg-solar-red/5 border-solar-red/20 my-8">
              <h3 className="text-xl font-bold mb-4">Ready to get started with {title}?</h3>
              <p className="mb-4">Our experts are ready to help you design the perfect solution for your needs.</p>
              <Link 
                to="/contact" 
                className="solar-button-primary"
              >
                Get a Free Consultation <ArrowRight className="h-4 w-4 ml-1 inline-block" />
              </Link>
            </div>
          </div>
          
          {/* Content Sections */}
          {sections.map((section, index) => (
            <div key={index} className="mb-16 last:mb-0 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <h2 className="heading-md mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-solar-red text-white flex items-center justify-center mr-3 text-sm">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              
              <div>{section.content}</div>
            </div>
          ))}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-16 pt-8 border-t border-border">
            {prevService ? (
              <Link 
                to={`/services/${prevService.id}`}
                className="flex items-center text-solar-red hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous: {prevService.title}
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextService ? (
              <Link 
                to={`/services/${nextService.id}`}
                className="flex items-center text-solar-red hover:underline"
              >
                Next: {nextService.title}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="solar-section bg-solar-red text-white">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="heading-lg mb-4">Ready to Harness the Power of Solar?</h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today for a free consultation and take the first step toward energy independence.
          </p>
          <Link 
            to="/contact" 
            className="solar-button bg-white text-solar-red hover:bg-white/90 transition-colors duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
