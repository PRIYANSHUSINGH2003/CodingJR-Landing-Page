import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ProductTour from './components/ProductTour';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[--purple-light] via-[--purple-primary] to-[--purple-dark] text-[--text-primary] font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <ProductTour />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}