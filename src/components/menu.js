import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';
import { SiInstagram } from "react-icons/si";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Menu() {

  return (
    <div className="menu">
      <h1 className="nameHeader">Hardy Izard</h1>
      <Link to="/">Sculpture</Link>
      <Link to="About">About</Link>
      <Link to="Video">Videos</Link>
      <Link to="Contact">Contact</Link>
      <SiInstagram className="instagram"/>
    </div>
  );
}

export default Menu;
