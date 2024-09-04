import About from "./components/About";
import Banner from "./components/Banner";
import Cartoon from "./components/Cartoon";
import Footer from "./components/Footer";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReadyToStart from "./components/ReadyToStart";

const App = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <Banner />
      <Marque />
      <About />
      <Cartoon />
      <Projects />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default App;
