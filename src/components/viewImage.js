import React from 'react';
import unsung from '../img/unsung.jpeg';
import coyoteskull1 from '../img/coyoteskull1.jpeg';
import coyoteskull2 from '../img/coyoteskull2.jpeg';
import coyoteskull3 from '../img/coyoteskull3.jpeg';
import twoweekspay from '../img/2weekspay.jpeg';

function ViewImage(props) {
  const image = props.location.state.staticContext;
  return (
    <div>
      <img src={image} alt={image.toString()}/>
    </div>
  )
}

export default ViewImage ;
