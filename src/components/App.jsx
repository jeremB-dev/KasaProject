import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;