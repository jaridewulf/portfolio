import Name from './components/Name';
import SideInfo from './components/SideInfo';
import './App.css';
import Socials from './components/Socials';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <header>
        <Helmet>
          <meta name="description" content="Jari De Wulf, a motivated devine student. Designer, Developer, Researcher"/>          
          <meta name="keywords" content="Developer, Front-End, Designer, Webdesign, Graphic Design, Grafisch Vormgever"/>
          <meta name="author" content="Jari De Wulf"/>
        </Helmet>
        <h1 className="hidden">Roles Developer ( Develop - Front-End ) - Designer ( Design - Webdesign - Graphic - Grafisch - Vormgever) - Researcher - Student - Devine </h1>
        <h2 className="hidden">Location Deinze - Petegem - Nevele - Olsene - Leie - Astene - Sint-Martens-Latem - Waregem</h2>
      </header>
      <div className="body">
      <Name />
      <SideInfo />
      </div>
      <footer className="footer">
        <Socials />
      </footer>
    </div>
  );
}

export default App;
