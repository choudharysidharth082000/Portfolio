
import './App.css';

//components
import Navbar from './Navbar/Navbar'
import HeroImage from './HeroImage/HeroImage'
import Content from './ContentSection/Content.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Content />
     
    </div>
  );
}

export default App;
