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
    </nav>
  );
}

export default NavBar;
