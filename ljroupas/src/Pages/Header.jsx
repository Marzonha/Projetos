// Dependências
import { Link, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "../components/Navbar";
import Usuario from "../components/Usuario";

// Pages
import Perfil from "./Perfil";

// CSS
import style from "../CSS/header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <Link to="/">
        <img src="" alt="Logo da Loja" />
      </Link>

      {/* Navbar centralizada */}
      <div className={style.Rltv}>
        <Navbar />
      </div>

      {/* Usuário no canto direito */}
      <div className={style.usuarioContainer}>
        <Routes>
          <Route path="/perfil" element={<Perfil />}></Route>
        </Routes>
        <Usuario />
      </div>
    </header>
  );
}
