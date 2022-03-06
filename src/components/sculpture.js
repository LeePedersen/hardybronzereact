import '../css/sculpture.css'
import PageHeader from './page-header.js';
import { Link } from 'react-router-dom';
import { imageList } from '../constants/imageList';

function Sculpture() {
  const halfway = Math.ceil(imageList.length);
  const column1list = imageList.slice(0, halfway / 2);
  const column2list = imageList.slice(halfway / 2);
  return (
    <>
      <PageHeader title={"Sculpture"}/>
      <div className="Sculpture">
        <div className="column">
          {column1list.map((image, index) =>
            <>
              <Link key={index} to={{ pathname: "viewImage", state: { staticContext: column1list[index] }}}><img src={column1list[index].src} alt={column1list[index].alt}/></Link>
              <p className="description">{image.alt} <br/> l = {image.length}" <br/> w = {image.width}" <br/> d = {image.depth}"</p>
            </>
          )}
        </div>
        <div className="column">
          {column2list.map((image, index) =>
            <>
              <Link key={index} to={{ pathname: "viewImage", state: { staticContext: column2list[index] }}}><img src={column2list[index].src} alt={column2list[index].alt}/></Link>
              <p className="description">{image.alt} <br/> l = {image.length}" <br/> w = {image.width}" <br/> d = {image.depth}"</p>
            </>
          )}
          
        </div>
      
      </div>
    </>
  )
}

export default Sculpture;
