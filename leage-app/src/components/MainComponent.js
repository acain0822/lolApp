import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Standings from './StandingsComponent';
import Schedule from './ScheduleComponent';
import {Switch, Route, Redirect } from 'react-router-dom';
import get from '../api';

class Main extends Component {
  state = {
    matches: []
  };

  render() {
    const HomePage = () => {
      return(
        <Home matches={this.state.matches} />
      );
    };

    return (
			<div>
				<Header />
        <button onClick={ () => {
              const matches = get(`/series/league-of-legends-na-lcs-summer-2018/matches`);
                matches.then( res => this.setState( {matches : res }) );
              }} >Request API</button>
				<Switch>
					<Route path='/home' component={HomePage} />
          <Route path='/schedule' render={ () => <Schedule matches={this.state.matches} />} />
          <Route path='/standings' component={Standings} />
					<Redirect to='/' />
				</Switch>
			</div>
		)

  };
}

export default Main;