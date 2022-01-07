import React from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';
import { SiInstagram } from "react-icons/si";

function Header() {
  return (
    <div className="leftColumn">
      <h1>Hardy Izard</h1>
      <Link className="link" to="/">Sculpture</Link><br/><br/>
      <Link className="link" to="About">About</Link><br/><br/>
      <Link className="link" to="Video">Videos</Link><br/><br/>
      <Link className="link" to="Contact">Contact</Link><br/>
      <SiInstagram className="instagram"/>
    </div>
  );
}

export default Header;
