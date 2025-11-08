//importação do CSS
import style from "../CSS/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={style.Pnav}>
        <form
          className={style.Form}
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search" className={style.srOnly}>
            Buscar
          </label>
          <input
            id="search"
            type="search"
            placeholder="O QUE PROCURA ?"
            aria-label="Buscar"
          />
          <button type="submit" className={style.Btn}>
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}
