 // importation des composants principaux
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/ApptCards";
import Header from "./components/Header";
import Footer from "./components/Footer";

// importation des composants de configuration de la navigation
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// exportation du composant App
export default App;