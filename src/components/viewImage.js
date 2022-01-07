import React from 'react';

function ViewImage(props) {
  const image = props.image;
  return (
    <div>
      <img src={image} alt={image.toString()}/>
    </div>
  )
}

export default ViewImage ;
