import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Navbar/Intro/Intro";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
