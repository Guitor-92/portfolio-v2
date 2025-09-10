import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;