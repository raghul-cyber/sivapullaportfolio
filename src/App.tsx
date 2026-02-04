import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
