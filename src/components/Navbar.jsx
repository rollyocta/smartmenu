// src/components/Navbar.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <h1>Cafe<span>Menu</span></h1>
        </Link>

        
      </div>
    </nav>
  );
};

export default Navbar;