import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

import Prompt from './components/Prompt.jsx';
import AnswerInput from './components/AnswerInput.jsx';
import AnswerDisplay from './components/AnswerDisplay.jsx';
import AnswerCheck from './components/AnswerCheck.jsx';

const synth = window.speechSynthesis;

const QUESTIONS = [
  {
    prompt: '한글',
    answers: ['hangeul'],
    translation: 'Hangeul (or Hangul after a former romanisation scheme)'
  },
  {
    prompt: '세종',
    answers: ['sejong'],
    translation: 'Sejong the Great (1397-1450), king best known for creating Hangeul'
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
        latestWrongAnswers: [],
        answerCheckContent: 'show-answer',
        inputValue: ''
      };
  };

  setNewQuestion = () => {
    const newLatestAnswers = [this.state.currentQuestionID, ...this.state.latestAnswers];
    if (newLatestAnswers.length > 5) { newLatestAnswers.pop(); }
    this.setState({ latestAnswers: newLatestAnswers });

    let newQuestionID = Math.floor(Math.random() * QUESTIONS.length);
    this.setState({ currentQuestionID: newQuestionID });

    this.setState({ answerCheckContent: 'show-answer' });
    this.setState({ inputValue: '' });
  };

  handleChangeAnswerInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClickAnswerCheck = () => {
    const answer = QUESTIONS[this.state.currentQuestionID].answers[0];
    this.setState({ answerCheckContent: answer });

    window.setTimeout(this.setNewQuestion, 1000);
  };

  checkAnswer = () => {
    const currentQuestion = QUESTIONS[this.state.currentQuestionID];
    const answer = this.state.inputValue;

    if (currentQuestion.answers.includes(answer.toLowerCase())) {
      this.setState({ answerCheckContent: 'correct' });

      const toSpeak = new SpeechSynthesisUtterance(currentQuestion.answers[0]);
      toSpeak.lang = 'ko-KR';
      synth.speak(toSpeak);

      window.setTimeout(this.setNewQuestion, 1000);
    } else {
      if (!this.state.latestWrongAnswers.includes(this.state.currentQuestionID)) {
        this.setState(prevState => ({
          latestWrongAnswers: [...prevState.latestWrongAnswers, this.state.currentQuestionID]
        }));
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Up to Speed: Reading Korean</h1>
        <Prompt prompt={QUESTIONS[this.state.currentQuestionID].prompt} />
        <AnswerInput checkAnswer={this.checkAnswer}
            value={this.state.inputValue}
            handleChange={this.handleChangeAnswerInput} />
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
