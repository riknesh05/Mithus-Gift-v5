import "./App.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Carasole from "./Carasole.jsx";
import Community from "./Community.jsx";
import Footer from "./Footer.jsx";
import { nArrs, tDings } from "./data/Data";

function App() {
  
let dev = false;

if (dev) {
    alert("🚧 Under Development Not Optimized for Laptops — Click OK to continue.");
}
  return (
    <>
      <Nav />
      <Hero />
      <Carasole data={nArrs} name={"New Arrivals"} />
      <Carasole data={tDings} name={"Trendings"} />
      <Community />
      <Footer />
    </>
  );
}

export default App;
