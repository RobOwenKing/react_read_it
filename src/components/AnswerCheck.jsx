import React, { Component } from 'react';

class AnswerCheck extends Component {
  componentToRender = () => {
    if (this.props.content === 'show-answer') {
      return <span onClick={this.props.handleClick}>Show answer</span>;
    } else if (this.props.content === 'correct') {
      return <span>&#10003;</span>;
    } else {
      return <span>{this.props.content}</span>;
    }
  };

  render() {
    return (
      <div style={{fontSize: '1.5rem'}}>
        {this.componentToRender()}
      </div>
    );
  }
}

export default AnswerCheck;
