import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccreditationSection from '@/components/AccreditationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Archit Lohia | Accredited Investor Certification Services</title>
        <meta name="description" content="End-to-end documentation for Accredited Investor Certificate. Invest in AIFs, PMS, SIFs with reduced minimum thresholds. Expert CA services in Mumbai." />
        <meta name="keywords" content="Accredited Investor, AIF, PMS, SIF, Investment, Mumbai, Chartered Accountant, Net Worth Certificate" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AccreditationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
