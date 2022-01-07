import unsung from '../img/unsung.jpeg';
import coyoteskull1 from '../img/coyoteskull1.jpeg';
import coyoteskull2 from '../img/coyoteskull2.jpeg';
import coyoteskull3 from '../img/coyoteskull3.jpeg';
import twoweekspay from '../img/2weekspay.jpeg';
import '../css/sculpture.css'
import PageHeader from './page-header.js';
import ViewImage from './viewImage.js';
import { Link } from 'react-router-dom';

var imageList = [
  {
    src: unsung
  },
  {
    src: twoweekspay
  },
  {
    src: coyoteskull2
  },
  {
    src: coyoteskull3
  },

]

function Sculpture() {
  console.log(imageList[0].src);
  return (
    <div>
      <PageHeader title={"Sculpture"}/>
      <div className="Sculpture">
      
        <Link to={{ pathname: "viewImage", state: { staticContext: unsung }}}><img src={unsung} alt="unsung"/></Link>
        <img src={twoweekspay} alt="twoweekspay"/>
        <img src={coyoteskull2} alt="coyote skull"/>
        <img src={coyoteskull3} alt="coyote skull"/>
        <img src={coyoteskull1} alt="coyote skull"/>
      </div>
    </div>
  )
}

export default Sculpture;
