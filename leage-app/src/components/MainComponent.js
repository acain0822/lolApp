import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Standings from './StandingsComponent';
import Schedule from './ScheduleComponent';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  state = {
    matches: []
  };

  render() {
    const HomePage = () => {
      return(
        <Home>This is home</Home>
      );
    };

    return (
			<div>
				<Header />
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