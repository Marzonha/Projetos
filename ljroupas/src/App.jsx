// App.jsx - Configuração das rotas
import { Routes, Route } from "react-router-dom";
// Importação do css
import "./style.global.css";
// Importção da Header
import Header from "./Pages/Header";

import Perfil from "./Pages/Perfil";
function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/perfil" element={<Perfil />}></Route>
        </Routes>
    </>
  );
}

export default App;
