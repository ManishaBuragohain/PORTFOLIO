import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work.jsx";
import TimeLine from "./components/TimeLine.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <TimeLine />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
