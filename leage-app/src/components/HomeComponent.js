import React, {Component} from 'react';
import HpSlide from './HpSlide';
import BodyContent from './BodyContent';
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
        <React.Fragment>
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

  <BodyContent />
      </React.Fragment>
    );
    
}

export default Home;