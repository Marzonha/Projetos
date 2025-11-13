// App.jsx - Configuração das rotas
import { Routes, Route } from "react-router-dom";

// Importação do css
import "./style.global.css";

// Importção das Pages
import Header from "./Pages/Header";
import Perfil from "./Pages/Perfil";
import Main from "./Pages/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/perfil" element={<Perfil />} /> {/* ← Aqui! */}
      </Routes>
      <Main />
    </>
  );
}

export default App;
