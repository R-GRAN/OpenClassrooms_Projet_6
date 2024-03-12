import { NavLink } from "react-router-dom";
import logo from "@/assets/images/LOGO.svg";

function HeaderApp() {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/propos"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default HeaderApp;
