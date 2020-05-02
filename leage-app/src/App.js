import React from 'react';
import logo from './logo.svg';
import get from './api';
import './App.css';

class App extends React.Component {
  state = {
    matches: []
  };
  render() {
    const {matches} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
            <button onClick={ () => {
            const matches = get('matches');
              matches.then( res => this.setState( {matches : res }) );
            }} >Request API</button>
            Learn React

        </header>

        <div>
          {JSON.stringify(matches)}
        </div>
      </div>
    );
  }
}

export default App;
