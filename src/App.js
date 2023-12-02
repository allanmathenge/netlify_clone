import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
