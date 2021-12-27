import "./App.css";

//components
import Navbar from "./Navbar/Navbar";
import HeroImage from "./HeroImage/HeroImage";
import Content from "./ContentSection/Content.js";
import Projects from "./Projects/Project.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Content />
      <Projects />
    </div>
  );
}

export default App;
