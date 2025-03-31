import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Terms and Conditions"
        subtitle="Please read our terms and conditions carefully before using our services."
        dontShowCta={true}
      />
      
      {/* Terms and Conditions Content */}
      <section className="solar-section p-8 rounded-xl shadow-lg my-12 bg-secondary">
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
          
          <h3 className="text-xl font-bold">Payment Terms</h3>
          <p>Payments must be made as per the agreed schedule. Any delays in payments may result in project delays or additional charges.</p>
          
          <h3 className="text-xl font-bold">Warranty and Maintenance</h3>
          <p>The solar system comes with a standard manufacturer warranty. The Company is not responsible for damage due to improper use, natural disasters, or third-party modifications.</p>
          
          <h3 className="text-xl font-bold">Liability</h3>
          <p>The Company is not liable for any indirect damages or loss of savings due to system performance fluctuations.</p>
          
          <h3 className="text-xl font-bold">Governing Law</h3>
          <p>These terms shall be governed by the laws of the state where the installation occurs.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
