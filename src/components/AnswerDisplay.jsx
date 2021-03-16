import React, { Component } from 'react';

class AnswerDisplay extends Component {
  render() {
    const answer = this.props.answer;

    return (
      <div>
        <span style={{fontWeight: 'bold', fontFamily: "'Noto Sans KR', sans-serif" }}>{answer.prompt}</span>
        &nbsp;-&nbsp;
        /{answer.answers[0]}/ <span style={{fontStyle: 'italic'}}>{answer.translation}</span>
      </div>
    );
  }
}

export default AnswerDisplay;
