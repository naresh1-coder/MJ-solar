
import { Link } from 'react-router-dom';
import { siteConfig } from '@/lib/constants';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container max-w-7xl mx-auto pt-16 pb-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-solar-red rounded-md mr-2">
                <span className="text-white text-sm font-bold">MJ</span>
              </div>
              Solar
            </h3>
            <p className="text-muted-foreground mb-4">
              Providing clean and renewable energy solutions since 1995. We're committed to a sustainable future.
            </p>
            <div className="flex space-x-4">
              {siteConfig.social.map((item) => (
                <a 
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-foreground hover:bg-solar-red hover:text-solar-light transition-colors duration-300"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  {/* We'll use simple text instead of importing all social icons */}
                  <span>{item.name.substring(0, 1)}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="flex items-center text-muted-foreground hover:text-solar-red transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/privacy"
                  className="flex items-center text-muted-foreground hover:text-solar-red transition-colors duration-300"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="flex items-center text-muted-foreground hover:text-solar-red transition-colors duration-300"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-solar-red mt-0.5" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-solar-red mt-0.5" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-solar-red mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="solar-input"
                required
              />
              <button type="submit" className="solar-button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} MJ Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
