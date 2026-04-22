import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';   // ✅ new import
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />   {/* ✅ new section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
