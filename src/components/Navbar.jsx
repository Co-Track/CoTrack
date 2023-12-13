import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/Signup">Signup</NavLink> |{" "}
      <NavLink to="/Login">Login</NavLink>{" "}
    </nav>
  );
}

export default Navbar;
