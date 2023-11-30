import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

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
