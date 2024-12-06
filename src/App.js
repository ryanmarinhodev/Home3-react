import Header from "components/Header/header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Sobre from "./components/Pages/sobre";
import Projetos from "./components/Pages/projetos";
import Contato from "./components/Pages/contato";

//swiper carrossel =>
import { register } from "swiper/element/bundle";

register();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
