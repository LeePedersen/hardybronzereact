import React from 'react';

function Image(props) {
  const image = props.image;
  return (
    <div>
      <img src={image} alt={image.toString()}/>
    </div>
  )
}

export default Image;
