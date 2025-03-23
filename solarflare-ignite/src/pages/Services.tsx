
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/constants';
import { ArrowRight, Zap, Battery, Activity, Droplets, Check } from 'lucide-react';

const Services = () => {
  // Updated service details with correct paths
  const servicesWithDetails = [
    {
      ...siteConfig.services[0],
      path: '/services/grid',
      features: [
        'Connect to the utility grid',
        'Reduce or eliminate electricity bills',
        'Net metering benefits',
        'No batteries required',
        'Lower upfront costs'
      ],
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      ...siteConfig.services[1],
      path: '/services/off-grid',
      features: [
        'Complete energy independence',
        'No utility bills',
        'Battery storage included',
        'Works in remote locations',
        'Unaffected by grid outages'
      ],
      image: 'https://images.unsplash.com/photo-1559302995-f8d7c1e648e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      ...siteConfig.services[2],
      path: '/services/hybrid',
      features: [
        'Grid connection with battery backup',
        'Best of both grid-tied and off-grid',
        'Energy security during outages',
        'Flexible energy management',
        'Maximize self-consumption'
      ],
      image: 'https://images.unsplash.com/photo-1611365892117-baa49650139b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      ...siteConfig.services[3],
      path: '/services/solar-pumps',
      features: [
        'Water pumping powered by solar',
        'Zero operating costs',
        'Low maintenance requirements',
        'Suitable for remote locations',
        'Environmentally friendly'
      ],
      image: 'https://images.unsplash.com/photo-1601933513793-0f9a11d5e45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];
  
  // Helper function to render the correct icon
  const renderIcon = (icon: string) => {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Our Solar Services"
        subtitle="Comprehensive energy solutions tailored to your unique needs, from residential to commercial applications."
      />
      
      {/* Main Services Section */}
      <section className="solar-section">
        {servicesWithDetails.map((service, index) => (
          <div key={service.id} className="mb-20 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              {/* Image (alternating left/right layout) */}
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-solar-red text-white p-2 rounded-lg flex items-center gap-2">
                    {renderIcon(service.icon)}
                    <span className="font-medium">{service.title}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <h2 className="heading-lg mb-4">{service.title}</h2>
                <p className="text-lg mb-6">{service.description}</p>
                
                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-solar-red shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.path} 
                  className="solar-button-primary"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1 inline-block" />
                </Link>
              </div>
            </div>
            
            {/* Separator (except for last item) */}
            {index < servicesWithDetails.length - 1 && (
              <div className="my-20 border-t border-border"></div>
            )}
          </div>
        ))}
      </section>
      
      {/* Process Section */}
      <section className="solar-section bg-secondary">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Process</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            We make going solar simple with our streamlined, customer-focused approach.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-solar-red/20 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {[
              {
                title: "Initial Consultation",
                description: "We discuss your energy needs, goals, and assess your property's solar potential.",
                icon: "01"
              },
              {
                title: "Custom Design",
                description: "Our engineers design a system optimized for your property and energy requirements.",
                icon: "02"
              },
              {
                title: "Proposal & Approval",
                description: "We present a detailed proposal including costs, savings, and ROI. Once approved, we handle all necessary permits.",
                icon: "03"
              },
              {
                title: "Professional Installation",
                description: "Our certified technicians install your system with minimal disruption to your property.",
                icon: "04"
              },
              {
                title: "System Activation",
                description: "After inspection, we activate your system and provide comprehensive training on its operation.",
                icon: "05"
              },
              {
                title: "Ongoing Support",
                description: "We monitor your system's performance and provide maintenance and support as needed.",
                icon: "06"
              }
            ].map((step, index) => (
              <div key={index} className="md:flex items-center gap-8 animate-on-scroll">
                {/* Step Number (alternating sides) */}
                <div className={`flex justify-center md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:justify-end' : 'md:order-3 md:justify-start'}`}>
                  <div className="w-12 h-12 rounded-full bg-solar-red text-white font-bold text-lg flex items-center justify-center shadow-lg z-10">
                    {step.icon}
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-px md:order-2"></div>
                
                {/* Content */}
                <div className={`mt-4 md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'md:order-3 md:text-left' : 'md:order-1 md:text-right'}`}>
                  <div className="glass-card md:max-w-md mx-auto md:mx-0">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="solar-section">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Frequently Asked <span className="text-solar-red">Questions</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            Find answers to common questions about our solar services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              question: "How much can I save with solar?",
              answer: "Savings vary based on your current electricity usage, local rates, and system size. Most customers see 40-70% reductions in their electricity bills, with complete ROI within 5-8 years."
            },
            {
              question: "What incentives are available for solar?",
              answer: "There are federal tax credits, state rebates, and local incentives that can significantly reduce the cost of going solar. Our team will help you identify all available incentives for your location."
            },
            {
              question: "How long does installation take?",
              answer: "Most residential installations are completed in 1-3 days, while commercial projects may take longer depending on system size and complexity."
            },
            {
              question: "What maintenance is required?",
              answer: "Solar systems require minimal maintenance. Occasional cleaning and annual inspections are recommended to ensure optimal performance. We offer maintenance plans for worry-free ownership."
            },
            {
              question: "Do solar panels work during power outages?",
              answer: "Grid-tied systems without batteries will shut down during outages for safety reasons. If you want backup power, we recommend a hybrid system with battery storage."
            },
            {
              question: "How long do solar panels last?",
              answer: "Our solar panels are warrantied for 25 years but can last 30+ years. Inverters typically have 10-25 year warranties depending on the type."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="glass-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="solar-section bg-solar-red text-white">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="heading-lg mb-4">Ready to Harness the Power of the Sun?</h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today to schedule a free consultation and take the first step toward energy independence.
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
};

export default Services;
