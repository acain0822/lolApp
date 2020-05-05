import React from 'react';
import logo from './logo.svg';
import get from './api';
import HpSlide from './components/HpSlide';
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
            const matches = get(`/series/league-of-legends-na-lcs-summer-2018/matches`);
              matches.then( res => this.setState( {matches : res }) );
            }} >Request API</button>
            

        </header>


        <div>
          { matches.map( match => <HpSlide key={match.id} opps={match.opponents}  /> 
          ) } 
          {/* {JSON.stringify(matches)} */}
        </div>
      </div>
    );
  }
}

export default App;
