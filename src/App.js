import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Prompt from './components/Prompt.jsx';
import AnswerInput from './components/AnswerInput.jsx';
import AnswerDisplay from './components/AnswerDisplay.jsx';
import AnswerCheck from './components/AnswerCheck.jsx';

const QUESTIONS = [
  {
    prompt: '한글',
    answers: ['hangeul'],
    translation: 'Hangeul (or Hangul following old romanisation) - the Korean alphabet'
  },
  {
    prompt: '세종',
    answers: ['sejong'],
    translation: 'Sejong the Great (1397-1450), king best known for creating the hangeul alphabet'
  },
  {
    prompt: '한국',
    answers: ['hanguk'],
    translation: 'Korea'
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    const newQuestionID = Math.floor(Math.random() * QUESTIONS.length);

    this.state = {
        currentQuestionID: newQuestionID,
        latestAnswers: []
      };
  };

  setNewQuestion = () => {
    let newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
    this.setState({ currentQuestionID: newQuestionID });
  };

  checkAnswer = (answer) => {
    const currentQuestion = QUESTIONS[this.state.currentQuestionID];
    if (currentQuestion.answers.includes(answer.toLowerCase())) {
      const newLatestAnswers = [this.state.currentQuestionID, ...this.state.latestAnswers];
      if (newLatestAnswers.length > 5) { newLatestAnswers.pop(); }
      this.setState({ latestAnswers: newLatestAnswers });

      this.setNewQuestion();

      return true;
    } else {
      console.log('Wrong!');

      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Up to Speed: Reading Korean</h1>
        <Prompt prompt={QUESTIONS[this.state.currentQuestionID].prompt} />
        <AnswerCheck content='correct' />
        <AnswerInput checkAnswer={this.checkAnswer} />
        {this.state.latestAnswers.map((answer,id) => {
              return <AnswerDisplay key={id} answer={QUESTIONS[answer]} />
            })}
      </div>
    );
  };
}

export default App;
