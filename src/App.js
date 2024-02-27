import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Banner from "./components/Banner";
import About from "./components/About";
import World from "./components/World";
import Testimonial from "./components/Testimonial";
import Choose from "./components/Choose";
import Team from "./components/Team";
import Touch from "./components/Touch";
import News from './components/News'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Showcase />
      <Banner /> 
      <About />
      <World />
      <Testimonial />
      <Choose/>
      <Team/>
      <Touch />
      <News />
      <Footer />
    </div>
  );
}

export default App;
