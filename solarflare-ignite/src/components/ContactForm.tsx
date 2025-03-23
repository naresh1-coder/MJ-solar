import { useState } from 'react';
import { toast } from 'sonner';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent! We will get back to you soon.', {
        position: 'bottom-center'
      });

      // Construct WhatsApp message
      const whatsappMessage = `Hello, I have a query:
      \nName: ${name}
      \nEmail: ${email}
      \nPhone: ${phone || "Not provided"}
      \nMessage: ${message}`;

      // Encode the message for URL
      const whatsappUrl = `https://api.whatsapp.com/send?phone=918341131263&text=${encodeURIComponent(whatsappMessage)}`;

      // Redirect user to WhatsApp
      window.open(whatsappUrl, '_blank');

      // Clear form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };
    
  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-solar-red">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn("solar-input", errors.name && "border-solar-red focus:ring-solar-red/50")}
            placeholder="Your name"
          />
          {errors.name && <p className="text-sm text-solar-red">{errors.name}</p>}
        </div>
        
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-solar-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn("solar-input", errors.email && "border-solar-red focus:ring-solar-red/50")}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-sm text-solar-red">{errors.email}</p>}
        </div>
        
        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="solar-input"
            placeholder="Your phone number"
          />
        </div>
        
        {/* Service Type Field */}
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            I'm interested in
          </label>
          <select id="service" className="solar-input" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="grid">Grid Systems</option>
            <option value="off-grid">Off-Grid Systems</option>
            <option value="hybrid">Hybrid Systems</option>
            <option value="pump">Solar Pumps</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-solar-red">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn("solar-input min-h-[120px]", errors.message && "border-solar-red focus:ring-solar-red/50")}
          placeholder="Tell us about your project or requirements"
          rows={4}
        />
        {errors.message && <p className="text-sm text-solar-red">{errors.message}</p>}
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn("solar-button-primary w-full sm:w-auto", isSubmitting && "opacity-80 cursor-not-allowed")}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Check className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
