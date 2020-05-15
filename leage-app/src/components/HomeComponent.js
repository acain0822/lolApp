import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import HpSlide from './HpSlide';


function Home(props) {

    return(
        <div>
          <p>This is home</p>
          <div className="slider" >
          {/* { this.state.matches.map( match => <HpSlide key={match.id} opps={match.opponents}  /> 
            ) }  */}

              
          </div>
        </div>
    );
}

export default Home;