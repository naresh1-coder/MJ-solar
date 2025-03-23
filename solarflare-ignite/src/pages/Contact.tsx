
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Have questions or ready to start your solar journey? Get in touch with our team today."
      />
      
      {/* Contact Information Section */}
      <section className="solar-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-6">Get in <span className="text-solar-red">Touch</span></h2>
            
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-solar-red/10 text-solar-red flex items-center justify-center shrink-0 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-xl">{siteConfig.contact.phone}</p>
                  <p className="text-muted-foreground text-sm mt-1">Monday to Friday, 8am to 6pm</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-solar-red/10 text-solar-red flex items-center justify-center shrink-0 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-xl">{siteConfig.contact.email}</p>
                  <p className="text-muted-foreground text-sm mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-solar-red/10 text-solar-red flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Address</h3>
                  <p className="text-xl">{siteConfig.contact.address}</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-solar-red inline-flex items-center mt-2 hover:underline"
                  >
                    Get directions <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-solar-red/10 text-solar-red flex items-center justify-center shrink-0 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Friday:</p>
                      <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday:</p>
                      <p className="text-muted-foreground">9:00 AM - 3:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday:</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {siteConfig.social.map((item) => (
                  <a 
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-foreground hover:bg-solar-red hover:text-white transition-colors duration-300"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    {/* We'll use simple text instead of importing all social icons */}
                    <span className="font-bold">{item.name.substring(0, 1)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll stagger-2">
            <h2 className="heading-lg mb-6">Send Us a <span className="text-solar-red">Message</span></h2>
            <div className="glass-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="solar-section bg-secondary">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our <span className="text-solar-red">Location</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            Visit our office or schedule an appointment for a consultation.
          </p>
        </div>
        
        <div className="h-[500px] rounded-xl overflow-hidden shadow-xl animate-on-scroll stagger-2">
        <iframe className="w-full h-full min-h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7576.927257968184!2d83.8960385954948!3d18.280393960336717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c150ef1737321%3A0xa45cf11898953b7!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1742722420289!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="solar-section">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading-lg mb-4">Frequently Asked <span className="text-solar-red">Questions</span></h2>
          <p className="subtitle max-w-3xl mx-auto">
            Find quick answers to common questions about contacting us and our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              question: "How soon can I get a quote?",
              answer: "We typically provide preliminary quotes within 24-48 hours after your initial contact. A detailed, final quote may require a site visit or additional information."
            },
            {
              question: "Is there a fee for consultations?",
              answer: "No, we offer free initial consultations and quotes. We believe in providing value upfront and helping you make an informed decision without any obligations."
            },
            {
              question: "Do you service my area?",
              answer: "We serve most locations across California. Contact us with your address, and we'll quickly confirm if you're within our service area."
            },
            {
              question: "What information do I need to provide for a quote?",
              answer: "For an accurate quote, we'll need your address, average monthly electricity usage or bills, and roof age (if known). Additional details can help us tailor our solution better."
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
          <h2 className="heading-lg mb-4">Ready to Go Solar?</h2>
          <p className="text-white/80 text-lg mb-8">
            Start your journey to energy independence today. Our team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="solar-button bg-white text-solar-red hover:bg-white/90 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </a>
            <a 
              href="#contact-form"
              className="solar-button bg-transparent border border-white text-white hover:bg-white/10 transition-colors duration-300"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
