import React from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';
import { SiInstagram } from "react-icons/si";

function Header() {
  // componentDidMount() {
  //   window.addEventListener("resize", this.resize.bind(this));
  //   this.resize();
  // }
  //
  // resize() {
  //   let currentHideNav = (window.innerWidth <= 760);
  //   if (currentHideNav !== this.state.hideNav) {
  //     this.setState({hideNav: currentHideNav});
  //   }
  // }
  //
  // componentWillUnmount() {
  //     window.removeEventListener("resize", this.resize.bind(this));
  // }
  //
  // const [shown, setShown] = useState(false);
  // const showMenu = () => {
  //   setShown(true);
  // }

  return (
    <div className="leftColumn">
      <h1 className="nameHeader">Hardy Izard</h1>
      <p><Link to="/">Sculpture</Link></p>
      <p><Link to="About">About</Link></p>
      <p><Link to="Video">Videos</Link></p>
      <p><Link to="Contact">Contact</Link></p>
      <p><SiInstagram className="instagram"/></p>
    </div>
  );
}

export default Header;
