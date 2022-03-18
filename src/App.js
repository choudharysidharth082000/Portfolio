import "./App.scss";

//components
import Navbar from "./Navbar/Navbar";
import HeroImage from "./HeroImage/HeroImage.js";

import Content from "./ContentSection/Content.js";
import Projects from "./Projects/Project.js";
import Middle from "./middleContent/Middle.js";
import Achievements from "./Achievments/Achievements.js";
import SecondHero from "./SecondHero/SecondHero.js";
import Footer from "./Footer/Footer.js";
import Loader from 'react-loaders'

function App() {
  return (
    <div className="App">
      {/* <div className="containorLoader">
        <Loader type="ball-grid-pulse" />
      </div> */}
      <Navbar />
      <SecondHero />
      <Content />
      <Projects />
      <Middle />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
