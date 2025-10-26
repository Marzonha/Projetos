//importação do CSS
import style from "../CSS/navbar.module.css";
import "../style.global.css";

export default function Navbar() {
  return (
    <>
    <div className={style.Pnav}>
      <form>
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <img src="./Images/lupa-arredondada.png" id="btnBusca" alt="Buscar" />
      </form>
    </div>
    </>
  );
}
