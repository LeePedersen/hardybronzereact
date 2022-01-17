import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/menu.css';
import { SiInstagram } from "react-icons/si";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from "./menuIcon";
import { menuLinks } from '../constants/menuLinks';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    }
  }

  toggleMenu() {
    // toggle menu on click
    if (this.state.menuVisible) {
      this.setState({menuVisible: false})
    } else {
      this.setState({menuVisible: true})
    }
  }

  render() {
    // button makes ripple effect
    // if menu is visible, return map of images, else return the menu icon component
    return (
      <div className="menu">
        <h1 className="menuNameHeader">Hardy Izard</h1>
        <div className="sidebar" onClick={() => this.toggleMenu()}>
          {this.state.menuVisible ?
            <div className="menuList">
              <List disablePadding dense>
                {menuLinks.map(({ label, name, linkTo, ...rest }) => (
                  <ListItem key={name} {...rest}>
                  <Link to={linkTo}><p className="labelText">{label}</p></Link>
                  </ListItem>
                ))}
                <ListItem>
                  <p className="labelText"><SiInstagram/></p>
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
