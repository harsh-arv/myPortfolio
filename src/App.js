import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Skill />
      {/* <Contact /> */}
      <SocialLinks />
      <Footer/>
    </div>
  );
}

export default App;
