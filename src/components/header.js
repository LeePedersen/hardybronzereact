import React from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';
import { SiInstagram } from "react-icons/si";

function Header() {
  return (
    <div className="leftColumn">
      <h1>Hardy Izard</h1>
      <p><Link to="/">Sculpture</Link></p>
      <p><Link to="About">About</Link></p>
      <p><Link to="Video">Videos</Link></p>
      <p><Link to="Contact">Contact</Link></p>
      <p><SiInstagram className="instagram"/></p>
    </div>
  );
}

export default Header;
