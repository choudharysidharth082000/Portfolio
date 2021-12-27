import "./App.css";

//components
import Navbar from "./Navbar/Navbar";
import HeroImage from "./HeroImage/HeroImage";
import Content from "./ContentSection/Content.js";
import Projects from "./Projects/Project.js";
import Middle from "./middleContent/Middle.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Content />
      <Projects />
      <Middle />
    </div>
  );
}

export default App;
