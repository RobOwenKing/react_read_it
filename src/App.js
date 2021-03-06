import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

import Prompt from './components/Prompt.jsx';
import AnswerInput from './components/AnswerInput.jsx';
import AnswerDisplay from './components/AnswerDisplay.jsx';
import AnswerCheck from './components/AnswerCheck.jsx';
import SubmitButton from './components/SubmitButton.jsx';

import QUESTIONS from './data/questions_korean.js';

const synth = window.speechSynthesis;

class App extends Component {
  constructor(props) {
    super(props);

    const newQuestionID = Math.floor(Math.random() * QUESTIONS.length);

    this.state = {
        currentQuestionID: newQuestionID,
        latestAnswers: [],
        latestWrongAnswers: [],
        answerCheckContent: 'show-answer',
        inputValue: '',
        inputClasses: ''
      };
  };

  resetAnswerInputAndCheck = () => {
    this.setState({ answerCheckContent: 'show-answer',
        inputClasses: '' });
  };

  setNewQuestion = () => {
    let newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
    const wrongAnswers = this.state.latestWrongAnswers;

    if (wrongAnswers.length > 0
        && !this.state.latestAnswers.includes(wrongAnswers[0])) {
      newQuestionID = wrongAnswers.shift();
      this.setState({ latestWrongAnswers: wrongAnswers });
    } else {
      while (this.state.latestAnswers.includes(newQuestionID)) {
        newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
      }
    }

    this.setState({ currentQuestionID: newQuestionID });
  };

  startNewRound = () => {
    const newLatestAnswers = [this.state.currentQuestionID, ...this.state.latestAnswers];
    if (newLatestAnswers.length > 5) { newLatestAnswers.pop(); }
    this.setState({ latestAnswers: newLatestAnswers,
        answerCheckContent: 'show-answer',
        inputValue: '' });

    this.setNewQuestion();
  };

  handleChangeAnswerInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClickAnswerCheck = () => {
    const answer = QUESTIONS[this.state.currentQuestionID].answers[0];
    this.setState({ answerCheckContent: answer });
  };

  checkAnswer = () => {
    this.resetAnswerInputAndCheck();

    const currentQuestion = QUESTIONS[this.state.currentQuestionID];
    const answer = this.state.inputValue;

    if (currentQuestion.answers.includes(answer.toLowerCase())) {
      this.setState({ answerCheckContent: 'correct',
          inputClasses: 'animated-green' });

      const toSpeak = new SpeechSynthesisUtterance(currentQuestion.prompt);
      toSpeak.lang = 'ko-KR';
      synth.speak(toSpeak);

      window.setTimeout(this.startNewRound, 1000);
    } else {
      if (!this.state.latestWrongAnswers.includes(this.state.currentQuestionID)) {
        this.setState(prevState => ({
          latestWrongAnswers: [...prevState.latestWrongAnswers, this.state.currentQuestionID]
        }));
      }

      this.setState({ answerCheckContent: 'sorry',
          inputClasses: 'animated-shake' });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Up to Speed: Reading Korean</h1>
        <Prompt prompt={QUESTIONS[this.state.currentQuestionID].prompt} />
        <AnswerInput checkAnswer={this.checkAnswer}
            value={this.state.inputValue}
            handleChange={this.handleChangeAnswerInput}
            handleAnimationEnd={this.resetAnswerInputAndCheck}
            classes={this.state.inputClasses} />
        <SubmitButton checkAnswer={this.checkAnswer} />
        <AnswerCheck content={this.state.answerCheckContent}
            handleClick={this.handleClickAnswerCheck} />
        <div style={{ fontSize: '1.5rem', marginTop: '12px' }}>
          {this.state.latestAnswers.map((answer,id) => {
              return <AnswerDisplay key={id} answer={QUESTIONS[answer]} />
            })}
        </div>
      </div>
    );
  };
}

export default App;
