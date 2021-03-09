import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Prompt from './components/Prompt.jsx';
import AnswerInput from './components/AnswerInput.jsx';

class App extends Component {
  checkAnswer = (answer) => {
    console.log(answer);
  };

  render() {
    return (
      <div className="App">
        <h1>Up to Speed: Reading Korean</h1>
        <Prompt prompt='한' />
        <AnswerInput checkAnswer={this.checkAnswer} />
      </div>
    );
  }
}

export default App;
