import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  state = {
    matches: []
  };

  render() {
    const {matches} = this.state;
    const HomePage = () => {
      return(
        // <Home matches={this.state.matches}>HomePage</Home> 

        <Home>This is home</Home>
      )
    };

    return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Redirect to='/home' />
				</Switch>
			
       This is main
			</div>
		)

  };
}

export default Main ;