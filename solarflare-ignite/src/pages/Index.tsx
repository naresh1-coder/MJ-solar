
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ArrowRight, Check, Sun } from 'lucide-react';
import Brands from '@/components/Brands';
import WorkGallery from '@/components/WorkGallery';
import solor5 from "../assets/solor5.jpg"
const Index = () => {
  // Counter animation for stats
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);

  useEffect(() => {
    const animateStats = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !statsAnimated.current) {
        const statElements = document.querySelectorAll('.stat-value');
        
        statElements.forEach((el) => {
          const value = el.textContent || '';
          
          // Skip if not a number (like 24/7)
          if (value.includes('/') || value.includes('+')) return;
          
          const numericValue = parseInt(value.replace(/,/g, ''));
          if (isNaN(numericValue)) return;
          
          let currentCount = 0;
          const duration = 2000; // ms
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameDuration);
          const countIncrement = numericValue / totalFrames;
          
          const counter = setInterval(() => {
            currentCount += countIncrement;
            
            if (currentCount >= numericValue) {
              clearInterval(counter);
              el.textContent = value; // Set final value with formatting
            } else {
              el.textContent = Math.floor(currentCount).toLocaleString();
            }
          }, frameDuration);
        });
        
        statsAnimated.current = true;
      }
    };
    
    const observer = new IntersectionObserver(animateStats, {
      threshold: 0.5
    });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Powering The Future Infinitely"
        subtitle="Harness the sun's energy with our cutting-edge solar solutions. Reduce your carbon footprint and save on electricity bills."
        ctaText="Get a Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />
      
      {/* Who We Are Section */}
      <section className="solar-section">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="animate-fade-in-up duration-700">
      <h2 className="heading-lg mb-4">
        <span className="text-solar-red">Solar</span> Energy Solutions
      </h2>
      <p className="subtitle mb-6">
         We've been at the forefront of renewable energy innovation, bringing sustainable power solutions to homes and businesses across the country.
      </p>
      <ul className="space-y-3 mb-8">
        {['High-quality solar panels with 25-year warranty', 
          'Expert installation by certified professionals',
          'Customized solutions tailored to your needs',
          '24/7 monitoring and dedicated support'].map((item, i) => (
          <li key={i} className="flex items-start group">
            <Check className="h-5 w-5 mr-2 text-solar-red transition-transform duration-300 group-hover:scale-125 shrink-0 mt-0.5" />
            <span className="transition-colors duration-300 group-hover:text-solar-red">{item}</span>
          </li>
        ))}
      </ul>
   
      <Link 
  to="/about" 
  className="solar-button-outline group border-2 border-solar-red text-solar-red px-6 py-3 rounded-md transition-all duration-300 hover:bg-solar-red hover:text-white hover:shadow-lg focus:ring-2 focus:ring-solar-red focus:outline-none"
>
  About Us 
 </Link>



    </div>
    
    <div className="animate-fade-in-up duration-1000 delay-200">
      <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl group">
        <div className="absolute inset-0 bg-gradient-to-br from-solar-red/30 to-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-solar-black/20 z-0"></div>
        <img 
          src={solor5}
          alt="Solar panels on a house roof" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      
      </div>
    </div>
  </div>
</section>
      
      {/* Our Services Section */}
      <section className="solar-section bg-secondary">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Services</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            We offer a comprehensive range of solar solutions designed to meet diverse energy needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="w-full rounded mt-4 solar-section bg-solar-red text-white">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col items-center">
                <span className="stat-value text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-white/80">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="solar-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Engineer installing solar panels" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="lg:col-span-7 animate-on-scroll stagger-2">
            <h2 className="heading-lg mb-4">Why <span className="text-solar-red">Choose Us</span></h2>
            <p className="subtitle mb-8">
              We distinguish ourselves through quality, expertise, and unwavering commitment to customer satisfaction and environmental sustainability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Expert Team',
                  description: 'Our engineers and technicians are industry-certified experts.',
                  icon: <Sun className="h-5 w-5" />
                },
                {
                  title: 'Quality Products',
                  description: 'We use only top-tier, certified solar equipment.',
                  icon: <Sun className="h-5 w-5" />
                },
                {
                  title: 'Tailored Solutions',
                  description: 'Custom designs based on your specific energy requirements.',
                  icon: <Sun className="h-5 w-5" />
                },
                {
                  title: 'After-Sales Support',
                  description: '24/7 monitoring and dedicated customer service.',
                  icon: <Sun className="h-5 w-5" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-secondary transition-colors duration-300">
                  <div className="h-10 w-10 rounded-lg bg-solar-red/10 text-solar-red flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WorkGallery/>
      {/* Testimonials Section */}
      {/* <section className="solar-section bg-secondary">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="heading-lg mb-4">Client <span className="text-solar-red">Testimonials</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
        </div>
        
        <TestimonialSlider testimonials={siteConfig.testimonials} className="animate-on-scroll stagger-2" />
      </section> */}
      <Brands/>
      {/* Contact Section */}
      <section className="solar-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-4">Get in <span className="text-solar-red">Touch</span></h2>
            <p className="subtitle mb-8">
              Ready to begin your solar journey? Contact us today for a free consultation and quote. 
              Our experts are standing by to answer your questions.
            </p>
            
            <ContactForm />
          </div>
          
          <div className="animate-on-scroll stagger-2">
            <div className="h-full w-full rounded-xl overflow-hidden shadow-xl">
              
              
              <iframe className="w-full h-full min-h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7576.927257968184!2d83.8960385954948!3d18.280393960336717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c150ef1737321%3A0xa45cf11898953b7!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1742722420289!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
