import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import Reviews from './components/Reviews';

// connected to netlify
// after chagnes
// git add .
// git commit -m 'comment'
// git push

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
