import React, { Component } from 'react';

// import logo from './logo.svg';
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
        latestAnswers: [],
        answerCheckContent: 'show-answer'
      };
  };

  setNewQuestion = () => {
    const newLatestAnswers = [this.state.currentQuestionID, ...this.state.latestAnswers];
    if (newLatestAnswers.length > 5) { newLatestAnswers.pop(); }
    this.setState({ latestAnswers: newLatestAnswers });

    let newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
    this.setState({ currentQuestionID: newQuestionID });

    this.setState({ answerCheckContent: 'show-answer' });
  };

  handleClickAnswerCheck = () => {
    const answer = QUESTIONS[this.state.currentQuestionID].answers[0];
    this.setState({ answerCheckContent: answer });
  };

  checkAnswer = (answer) => {
    const currentQuestion = QUESTIONS[this.state.currentQuestionID];
    if (currentQuestion.answers.includes(answer.toLowerCase())) {
      this.setState({ answerCheckContent: 'correct' });

      window.setTimeout(this.setNewQuestion, 1000);

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
        <AnswerInput checkAnswer={this.checkAnswer} />
        <AnswerCheck content={this.state.answerCheckContent}
            handleClick={this.handleClickAnswerCheck} />
        {this.state.latestAnswers.map((answer,id) => {
              return <AnswerDisplay key={id} answer={QUESTIONS[answer]} />
            })}
      </div>
    );
  };
}

export default App;
