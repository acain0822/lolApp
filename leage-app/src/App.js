import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.css';
import'./css/main.scss';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="hp">
          <Main  />
          </div>
      </BrowserRouter>
    )
  };
}

export default App;
