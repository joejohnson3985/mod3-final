import React, { Component } from 'react';
import './App.scss';
import Results from '../../Containers/Results/Results'

class App extends Component {

  render() {
    return(
      <div className='main'>
        <h1>Presidents and Assholes</h1>
        <Results />
      </div>
    )
  }

}

export default App;
