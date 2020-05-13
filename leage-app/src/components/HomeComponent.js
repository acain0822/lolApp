import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import HpSlide from './HpSlide';
import get from '../api';

function Home() {

    return(
        <div>
          <p>This is home</p>
          <div className="slider" >
          {/* { this.state.matches.map( match => <HpSlide key={match.id} opps={match.opponents}  /> 
            ) }  */}

              <button onClick={ () => {
              const matches = get(`/series/league-of-legends-na-lcs-summer-2018/matches`);
                matches.then( res => this.setState( {matches : res }) );
              }} >Request API</button>
          </div>
        </div>
    );
}

export default Home;