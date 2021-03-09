import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Prompt from './components/Prompt.jsx';
import AnswerInput from './components/AnswerInput.jsx';

const QUESTIONS = [
  { prompt: '한글',
    answers: ['hangeul'],
    translation: 'Hangeul (or Hangul following old romanisation) - the Korean alphabet' }
];

class App extends Component {
  constructor(props) {
    super(props);

    const newQuestionID = Math.floor(Math.random() * QUESTIONS.length);

    this.state = { currentQuestionID: newQuestionID };
  }

  setNewQuestion = () => {
    let newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
    this.setState({ currentQuestionID: newQuestionID });
  }

  checkAnswer = (answer) => {
    const currentQuestion = QUESTIONS[this.state.currentQuestionID];
    if (currentQuestion.answers.includes(answer.toLowerCase())) {
      console.log('Correct!');
    } else {
      console.log('Wrong!');
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Up to Speed: Reading Korean</h1>
        <Prompt prompt={QUESTIONS[this.state.currentQuestionID].prompt} />
        <AnswerInput checkAnswer={this.checkAnswer} />
      </div>
    );
  }
}

export default App;
