import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/home" className="link-style logo">
        <h3>LOGO</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="link-style">
          <li>About</li>
        </Link>
        <Link to="/shop" className="link-style">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
