import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Read how we handle your data."
        dontShowCta={true}
      />
      
      {/* Privacy Policy Content */}
      <section className="solar-section p-8 rounded-xl shadow-lg my-12 bg-secondary">
        <h2 className="heading-lg mb-6 text-center">Privacy <span className="text-solar-red">Policy</span></h2>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Introduction</h3>
          <p>We value your privacy and are committed to protecting your personal information.</p>
          
          <h3 className="text-xl font-bold">Information We Collect</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Personal details such as name, email, and contact information.</li>
            <li>Usage data collected through cookies and tracking technologies.</li>
            <li>Transaction details related to purchases and services.</li>
          </ul>
          
          <h3 className="text-xl font-bold">How We Use Your Information</h3>
          <p>Your information is used to improve our services, process transactions, and communicate important updates.</p>
          
          <h3 className="text-xl font-bold">Data Security</h3>
          <p>We implement industry-standard security measures to safeguard your data from unauthorized access or disclosure.</p>
          
          <h3 className="text-xl font-bold">Third-Party Sharing</h3>
          <p>We do not sell or share your personal data with third parties, except as required by law or to provide essential services.</p>
          
          <h3 className="text-xl font-bold">Your Rights</h3>
          <p>You have the right to access, modify, or request the deletion of your personal data. Contact us for any privacy concerns.</p>
          
          <h3 className="text-xl font-bold">Changes to Policy</h3>
          <p>We may update our Privacy Policy periodically. Any significant changes will be communicated via our website.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;