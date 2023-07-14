import React from 'react';
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";



function Header() {
  return (
    <header>
        <div class="header">
            <h1>Foolish.dev</h1>
            <div>

            <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/service"}>Services</Link>

            </div>
        </div>
    </header>

  )
}

export default Header