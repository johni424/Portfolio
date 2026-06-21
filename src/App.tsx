import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative selection:bg-brand-primary/30 selection:text-white">
      {/* Global Background Element */}
      <div className="mesh-bg" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
