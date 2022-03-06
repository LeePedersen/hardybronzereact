import React, {useState} from 'react';
import '../css/viewImage.css';

function ViewImage(props) {
  const image = props.location.state.staticContext;
  const [imgClassName, setClassName] = useState("image");
  console.log(imgClassName);
  return (
    <div className="imageContainer">
      <div className="column">
        <img className={imgClassName} onClick={() => setClassName("imageClicked")} src={image.src} alt={image.alt}/>
      {image.moreImages &&
        image.moreImages.map(image => (
          <img className="image" src={image.src} alt={image.alt}/>
        ))
      }
      </div>
      <div className="column2">
        <h1>{image.alt}</h1>
        <p>L = {image.length}"</p>
        <p>W = {image.width}"</p>
        <p>D = {image.depth}"</p>
        <p className="description">{image.description}</p>
      </div>
    </div>
  )
}

export default ViewImage;


