import React from 'react';


function HpSlide(props) {
  return(
  
    <div>
      {props.opps.map( op => <span key={op.opponent.id}>{op.opponent.acronym} 
        <img alt={op.opponent.acronym} src={op.opponent.image_url} width="30"/>
      </span>) }
    </div>
  )
}

export default HpSlide;