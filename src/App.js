import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import NavigationRouter from "./components/NavigationRouter";


function App() {
  return (
    <div className="layout">
      <div className="navBar"> 
        
        <NavBar />
      </div>
      <div className="content-container">
        <NavigationRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
