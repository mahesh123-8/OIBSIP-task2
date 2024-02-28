import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/skills/skill'
import Poster from "./components/works/works";
import Client from "./components/myclient/client";
import Footer from "./components/footer/footer";
import Animate from "./components/midlevel";
import './index.css'
import Skillsss from "./components/newsec/skilllang";
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
  
   
   <Skills/>
   
   <Poster/>
   <Animate/>
   <Skillsss/>

   <Client/>
   <Footer/>
     </div>
  );
}

export default App;
