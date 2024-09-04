import About from "./components/About";
import Banner from "./components/Banner";
import Cartoon from "./components/Cartoon";
import Footer from "./components/Footer";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReadyToStart from "./components/ReadyToStart";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <Banner />
      <Marque />
      <About />
      <Cartoon />
      <Projects />
      <Reviews />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default App;
