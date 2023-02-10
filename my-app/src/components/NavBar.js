import React from "react";
import '../styles/NavBar.css';
import { Link } from "react-router-dom";
import logo from "./logo.png"

const Navbar = () => {
  return (
    <>
{/* <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/home">
    <img src={logo} width="100"  alt="logo-aquabot"/>
  </a>
</nav> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">
    <img src={logo} width="100"  alt="logo-aquabot"/>
  </a>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="create" span='left'>Create your own tree</a>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
};

export default Navbar;
