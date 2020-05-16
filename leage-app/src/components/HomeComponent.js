import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import HpSlide from './HpSlide';
import Flickity from 'react-flickity-component'
// import Flickity from 'flickity';
 import 'flickity/dist/flickity.min.css';

function Home(props) {
  const flickityOptions = {
  contain: true,
    groupCells: 4,
    prevNextButtons: false,
    pageDots: false,
    pageDots: false,
  }


    return(
        <div>
    <div id="teamsTicker" className="row ticker-wrapper schedule-carousel d-block mx-2">
      


    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
       options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
     { props.matches.map( match => <HpSlide key={match.id} opps={match.opponents}  /> 
      ) }  
    </Flickity>
  

      
        </div>
      </div>
    );
    
}

export default Home;