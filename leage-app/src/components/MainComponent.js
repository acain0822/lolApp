import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Standings from './StandingsComponent';
import Schedule from './ScheduleComponent';
import {Switch, Route, Redirect } from 'react-router-dom';
// import get from '../api';

class Main extends Component {

   state = {
      matches: []
    };

  
componentDidMount() {
  // const matches = get(`/series/league-of-legends-na-lcs-summer-2018/matches`);
 // matches.then( res => this.setState( {matches : res }) );
 fetch('https://api.pandascore.co/series/league-of-legends-na-lcs-summer-2018/matches?token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg')
 .then((response) => response.json())
 .then(match => {
     this.setState({ matches: match });
 });
}


  render() {

    

    const HomePage = () => {
      return(
        <Home matches={this.state.matches} />
      );
    };

    
    return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
          {/* <Route path='/schedule' component={Schedule} />} /> */}
          <Route path='/standings' component={Standings} />
          <Route path='/schedule' render={ () => <Schedule matches={this.state.matches} />} />
					<Redirect to='/' />
				</Switch>
			</div>
		)

  };
}

export default Main;