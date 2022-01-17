import '../css/sculpture.css'
import PageHeader from './page-header.js';
import { Link } from 'react-router-dom';
import { imageList } from '../constants/imageList';

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
