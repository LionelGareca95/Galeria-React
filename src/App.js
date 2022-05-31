import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Navbar/Intro/Intro";
import Services from "./components/services/Services";
import Experiencie from "./components/Experiencie/Experiencie";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiencie/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
