import React, { useState } from "react";
import '../css/header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
}
  handleAboutClick() {
    console.log("set state to about");
    this.setState({whichPage: "about"});
  }
  render() {
    return (
      <div className="leftColumn">
        <h1>Hardy Izard</h1>
      </div>
    )
  }
}

export default Header;
