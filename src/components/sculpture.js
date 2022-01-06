import unsung from '../img/unsung.jpeg';
import coyoteskull1 from '../img/coyoteskull1.jpeg';
import coyoteskull2 from '../img/coyoteskull2.jpeg';
import coyoteskull3 from '../img/coyoteskull3.jpeg';
import twoweekspay from '../img/2weekspay.jpeg';
import '../css/sculpture.css'

function Sculpture(){
  return (
    <div className="Sculpture">
      <div className="sculpture-header">
        <p className="title">Sculpture</p>
        <div className="line"/>
      </div>
      <img src={unsung} alt="unsung"/>
      <img src={twoweekspay} alt="twoweekspay"/>
      <img src={coyoteskull2} alt="coyote skull"/>
      <img src={coyoteskull3} alt="coyote skull"/>
      <img src={coyoteskull1} alt="coyote skull"/>
    </div>
  )
}

export default Sculpture;
