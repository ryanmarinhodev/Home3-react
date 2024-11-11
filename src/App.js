import Header from "components/Header/header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Pages/home";
import Sobre from "components/Pages/sobre";
import Projetos from "components/Pages/projetos";
import Contato from "components/Pages/contato";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Projetos />} />
        <Route path="/" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
