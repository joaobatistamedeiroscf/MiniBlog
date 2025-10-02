import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>

      <NavLink to="/" className={styles.navLink}>
        Inicio
      </NavLink>
      <NavLink to="/about" className={styles.navLink}>
        Sobre
      </NavLink>
      <NavLink to="/login" className={styles.navLink}>
        Login
      </NavLink>
      <NavLink to="/register" className={styles.navLink}>
        Cadastro
      </NavLink>
    </nav>
  );
}

export default NavBar;
