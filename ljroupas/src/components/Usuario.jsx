// components/Usuario.jsx
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Ícone como fallback
import style from "../CSS/usuario.module.css";

export default function Usuario() {
  return (
    <Link to="/perfil" className={style.usuarioLink}>
      <div className={style.avatarContainer}>
        <img 
          src="./Images/do-utilizador.png" /* Do utilizador ícones criados por Becris - Flaticon */
          alt="Foto do perfil" 
          className={style.avatarImage}
          onError={(e) => {
            // Se a imagem não carregar, esconde e usa o ícone
            e.target.style.display = 'none';
          }}
        />
        <FaUserCircle className={style.avatarFallback} />
      </div>
      <span className={style.usuarioText}>Meu Perfil</span>
    </Link>
  );
}