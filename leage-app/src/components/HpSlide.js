import React from 'react';

function HpSlide(props) {
  return(
    <div className="match-wrapper d-inline-block">
        {props.opps.map( op => <div className="col-6 float-left w-50" key={op.opponent.id}> 
          <img alt={op.opponent.acronym} src={op.opponent.image_url} width="30"/>
        </div>) }
    </div>
  )
}

export default HpSlide;