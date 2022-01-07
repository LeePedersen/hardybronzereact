import unsung from '../img/unsung.jpeg';
import coyoteskull1 from '../img/coyoteskull1.jpeg';
import coyoteskull2 from '../img/coyoteskull2.jpeg';
import coyoteskull3 from '../img/coyoteskull3.jpeg';
import twoweekspay from '../img/2weekspay.jpeg';
import '../css/sculpture.css'
import PageHeader from './page-header.js';
import ViewImage from './viewImage.js';

var imageList = [
  {
    src: {unsung},
    name: "Unsung"
  }
]

function Sculpture() {
  return (
    <div>
      <PageHeader title={"Sculpture"}/>
      <div className="Sculpture">
        <img src={unsung} alt="unsung"/>
        <img src={twoweekspay} alt="twoweekspay"/>
        <img src={coyoteskull2} alt="coyote skull"/>
        <img src={coyoteskull3} alt="coyote skull"/>
        <img src={coyoteskull1} alt="coyote skull"/>
      </div>
    </div>
  )
}

export default Sculpture;
