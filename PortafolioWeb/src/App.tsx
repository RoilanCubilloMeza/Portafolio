import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Passions } from './components/Passions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProgressBar } from './components/ProgressBar';

function App() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Passions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
