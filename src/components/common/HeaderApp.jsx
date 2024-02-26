import { Link } from "react-router-dom";
import logo from "@/assets/images/LOGO.svg";

function HeaderApp() {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default HeaderApp;
