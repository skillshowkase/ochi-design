import About from "./components/About";
import Banner from "./components/Banner";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <Banner />
      <Marque />
      <About />
    </div>
  );
};

export default App;
