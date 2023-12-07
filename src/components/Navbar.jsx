import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
    </nav>
  );
}

export default Navbar;
