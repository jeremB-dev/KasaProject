import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logement from "./components/Logements";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/id" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;