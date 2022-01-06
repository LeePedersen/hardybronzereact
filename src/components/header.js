import '../css/header.css';
import { SiInstagram } from "react-icons/si";

function Header() {
  return(
    <div className="leftColumn">
      <h1>Hardy Izard</h1>
      <div className="links">
      <p onClick={props.onClick}>Sculpture</p>
      <p>Videos</p>
      <p onClick={props.onClick}>About</p>
      <SiInstagram className="instagram"/>
      </div>
    </div>
  )
}

export default Header;

 // onClick={props.onClick}
