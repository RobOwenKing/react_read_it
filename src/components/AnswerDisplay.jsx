import React, { Component } from 'react';

class AnswerDisplay extends Component {
  render() {
    const answer = this.props.answer;

    return (
      <div style={{fontSize: '1.5rem'}}>
        <span style={{fontWeight: 'bold'}}>{answer.prompt}</span>
        &nbsp;-&nbsp;
        /{answer.answers[0]}/ <span style={{fontStyle: 'italic'}}>{answer.translation}</span>
      </div>
    );
  }
}

export default AnswerDisplay;