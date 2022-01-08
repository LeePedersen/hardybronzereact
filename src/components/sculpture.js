import unsung from '../img/unsung1.jpeg';
import coyoteskull1 from '../img/coyoteskull1.jpeg';
import coyoteskull2 from '../img/coyoteskull2.jpeg';
import coyoteskull3 from '../img/coyoteskull3.jpeg';
import twoweekspay from '../img/2weekspay.jpeg';
import '../css/sculpture.css'
import PageHeader from './page-header.js';
// import ViewImage from './viewImage.js';
import { Link } from 'react-router-dom';

var imageList = [
  {
    src: unsung,
    alt: "Unsung",
    length: "46",
    width: "26",
    depth: "6",
    description: "this is a description of the image Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each othe",
  },
  {
    src: twoweekspay,
    alt: "Two Weeks Pay",
    length: "46",
    width: "26",
    depth: "6",
    description: "this is a description of the image",
  },
  {
    src: coyoteskull2,
    alt: "coyoteskull2",
    length: "46",
    width: "26",
    depth: "6",
    description: "this is a description of the image",
  },
  {
    src: coyoteskull3,
    alt: "coyoteskull3",
    length: "46",
    width: "26",
    depth: "6",
    description: "this is a description of the image",
  },
  {
    src: coyoteskull1,
    alt: "coyoteskull1",
    length: "46",
    width: "26",
    depth: "6",
    description: "this is a description of the image",
  },

]

function Sculpture() {
  return (
    <>
      <PageHeader title={"Sculpture"}/>
      <div className="Sculpture">
      {imageList.map((image, index) =>
        <Link key={index} to={{ pathname: "viewImage", state: { staticContext: imageList[index] }}}><img src={imageList[index].src} alt={imageList[index].alt}/></Link>
      )}
      </div>
    </>
  )
}

export default Sculpture;
