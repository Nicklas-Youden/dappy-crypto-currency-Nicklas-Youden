import HighLights from "./components/HighLights"
import Roadmap from "./components/Roadmap";
import './App.scss';
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
        <Nav/>
      <section className="hero">
        <Hero/>
      </section>
      <main>
        <HighLights/>
        <Roadmap/>
      </main>
      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
