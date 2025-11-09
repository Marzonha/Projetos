// Dependências
import { Link } from "react-router-dom";

// Componentes
import Navbar from "../components/Navbar";
import Usuario from "../components/Usuario";

// Pages

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
        <Usuario />
      </div>
    </header>
  );
}
