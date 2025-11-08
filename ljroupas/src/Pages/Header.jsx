// Header.jsx - VERSÃO CORRIGIDA
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Usuario from "../components/Usuario";
import style from "../CSS/header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
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
