import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/roleplayers" className="navbar-link">
          Role Players
        </Link>
        <Link to="/timeline" className="navbar-link">
          Policy Movements
        </Link>
        <Link to="/policies" className="navbar-link">
          Product Components
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
