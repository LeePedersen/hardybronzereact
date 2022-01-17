import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/menu.css';
import { SiInstagram } from "react-icons/si";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "./menuIcon";

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    }
  }

  toggleMenu() {
    if (this.state.menuVisible) {
      this.setState({menuVisible: false})
    } else {
      this.setState({menuVisible: true})
    }
  }

  render() {
    const links = [
      {
        name: "sculpture",
        label: "Sculpture",
        linkTo: "/",
      },
      {
        name: "about",
        label: "About",
        linkTo: "About",
      },
      {
        name: "contact",
        label: "Contact",
        linkTo: "Contact",
      },
      {
        name: "videos",
        label: "Videos",
        linkTo: "Video",
      },
    ]

    // button makes ripple effect
    return (
      <div className="menu">
        <h1 className="menuNameHeader">Hardy Izard</h1>
        <div className="sidebar" onClick={() => this.toggleMenu()}>
          {this.state.menuVisible ?
            <div className="menuList">
              <List disablePadding dense>
                {links.map(({ label, name, linkTo, ...rest }) => (
                  <ListItem key={name} button {...rest}>
                  <Link to={linkTo}><ListItemText>{label}</ListItemText></Link>
                  </ListItem>
                ))}
                <ListItem button>
                  <ListItemText><SiInstagram/></ListItemText>
                </ListItem>
              </List>
            </div>
            :
            <div className="menuIcon">
              <MenuIcon />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Menu;
