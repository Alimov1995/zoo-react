import "./App.scss";

import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Work from "./components/Work/Work";
import Bgpanda from "./components/Bgpanda/Bgpanda";
import Pets from "./components/Pets/Pets";
import Pay from "./components/Pay/Pay";
import Testimonials from "./components/Testimonials/Testimonials";
import Animals from "./components/Animals/Animals";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Wrapper />
      <Work />
      <Bgpanda />
      <Pets />
      <Pay />
      <Testimonials />
      <Animals />
      <Footer />
    </>
  );
}

export default App;
