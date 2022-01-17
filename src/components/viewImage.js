import React from 'react';
import '../css/viewImage.css';

function ViewImage(props) {
  const image = props.location.state.staticContext;
  return (
    <div className="imageContainer">
      <div className="column">
        <img className="image" src={image.src} alt={image.alt}/>
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
