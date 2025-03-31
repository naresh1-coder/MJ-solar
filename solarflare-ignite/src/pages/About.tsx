
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import solar5 from "../assets/solor5.jpg"
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="MJ Solar"
        subtitle="We're on a mission to accelerate the transition to clean, sustainable energy."
      />
      
      {/* Our Story Section */}
      <section className="solar-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Story</span></h2>
            <p className="text-lg mb-6">
            MJ  SOLAR began with a simple yet powerful vision: to make clean, renewable energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading solar solutions provider.
            </p>
            <p className="text-lg mb-6">
              Throughout our journey, we&apos;ve remained committed to innovation, quality, and exceptional customer service. Our team of certified professionals brings decades of combined experience to every project.
            </p>
            <p className="text-lg">
              Today, we&apos;re proud to have helped thousands of homeowners and businesses reduce their carbon footprint and energy costs through our comprehensive solar solutions.
            </p>
          </div>
          
          <div className="animate-on-scroll stagger-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={solar5} 
                alt="Team of solar technicians" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-xl font-bold">&quot;We&apos;re bringing clean energy to every home and business.&quot;</p>
                  {/* <p className="text-white/80 mt-2">- John Smith, Founder & CEO</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="solar-section bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="glass-card animate-on-scroll">
            <h3 className="heading-md text-solar-red mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              To accelerate the world&apos;s transition to sustainable energy by providing innovative, high-quality solar solutions that are accessible to everyone.
            </p>
            <ul className="space-y-3">
              {[
                'Reduce global carbon emissions through renewable energy adoption',
                'Make solar energy affordable and accessible for all',
                'Provide exceptional service and support to our clients',
                'Continuously innovate and improve our products and services'
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-solar-red shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vision */}
          <div className="glass-card animate-on-scroll stagger-2">
            <h3 className="heading-md text-solar-red mb-4">Our Vision</h3>
            <p className="text-lg mb-6">
              A world powered by clean, renewable energy where sustainable living is the standard, not the exception.
            </p>
            <ul className="space-y-3">
              {[
                'A carbon-neutral future powered by the sun',
                'Solar technology integrated seamlessly into everyday life',
                'Energy independence for communities worldwide',
                'A sustainable legacy for future generations'
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-solar-red shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      {/* <section className="solar-section">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Team</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            Meet the dedicated professionals behind our success. Our team combines deep expertise with a passion for sustainable energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              title: "Founder & CEO",
              bio: "With over 30 years in renewable energy, John leads our company vision and strategic initiatives.",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Sarah Johnson",
              title: "Chief Technology Officer",
              bio: "Sarah oversees our technical operations and drives innovation in our solar solutions.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Michael Chen",
              title: "Head of Engineering",
              bio: "Michael ensures the highest quality standards in our system designs and installations.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Emily Rodriguez",
              title: "Customer Success Manager",
              bio: "Emily leads our customer support team, ensuring an exceptional experience for all clients.",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "David Wilson",
              title: "Sales Director",
              bio: "David helps clients find the perfect solar solution for their unique needs.",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Lisa Kumar",
              title: "Project Manager",
              bio: "Lisa ensures that every installation is completed on time and to the highest standards.",
              image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            }
          ].map((person, index) => (
            <div 
              key={index} 
              className="glass-card group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-solar-red mb-2">{person.title}</p>
                <p className="text-muted-foreground">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      
      {/* Our Values Section */}
      <section className="solar-section bg-secondary">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Values</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            These core principles guide everything we do, from product design to customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainability",
              description: "We're committed to environmental stewardship in all aspects of our business."
            },
            {
              title: "Innovation",
              description: "We continuously explore new technologies and approaches to improve our solutions."
            },
            {
              title: "Integrity",
              description: "We operate with honesty, transparency, and the highest ethical standards."
            },
            {
              title: "Excellence",
              description: "We strive for excellence in every system we design and install."
            },
            {
              title: "Customer Focus",
              description: "We put our customers first, ensuring their complete satisfaction."
            },
            {
              title: "Collaboration",
              description: "We work together as a team and with our clients to achieve the best results."
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="p-6 border border-border rounded-xl bg-background hover:border-solar-red/50 transition-colors duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="solar-section bg-solar-red text-white">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="heading-lg mb-4">Ready to Make the Switch to Solar?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of satisfied customers who have reduced their carbon footprint and energy costs with our solar solutions.
          </p>
          <a 
            href="/contact" 
            className="solar-button bg-white text-solar-red hover:bg-white/90 transition-colors duration-300"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </section>
      <section className="solar-section bg-secondary p-8 rounded-xl shadow-lg my-12 ">
        <h2 className="heading-lg mb-6 text-center">Terms and <span className="text-solar-red">Conditions</span></h2>
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Definitions</h3>
          <ul className="list-disc list-inside text-lg">
            <li><strong>Company:</strong> MJ Solar.</li>
            <li><strong>Customer:</strong> The person or entity purchasing solar installation services.</li>
            <li><strong>System:</strong> The solar panels and related equipment installed by the Company.</li>
          </ul>
          
          <h3 className="text-xl font-bold">Scope of Work</h3>
          <p>The Company agrees to design, supply, install, and commission a solar power system at the Customer’s premises as per the mutually agreed proposal.</p>
          
          <h3 className="text-xl font-bold">Site Assessment</h3>
          <p>The installation is subject to a site survey to assess technical feasibility. Any additional costs due to unforeseen site conditions will be borne by the Customer.</p>
          
          <h3 className="text-xl font-bold">Permits and Approvals</h3>
          <p>The Company will assist in obtaining necessary permits from APERC and the local utility company. The Customer must provide site access and cooperate with authorities.</p>
          
          <h3 className="text-xl font-bold">Payment Terms</h3>
          <ul className="list-disc list-inside text-lg">
            <li>10% upon signing of the contract (before site visit).</li>
            <li>80% before dispatch of material.</li>
            <li>10% before completion and commissioning.</li>
          </ul>
          
          <h3 className="text-xl font-bold">Installation Timeline</h3>
          <p>Installation begins within 2–3 weeks after all approvals and initial payment.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
