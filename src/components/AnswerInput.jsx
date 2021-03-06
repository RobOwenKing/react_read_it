import React, { Component } from 'react';

class AnswerInput extends Component {
  handleChange = (event) => {
    this.props.handleChange(event);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.checkAnswer();
    }
  };

  handleAnimationEnd = (event) => {
    this.props.handleAnimationEnd();
  };

  render() {
    return (
      <input type="text"
          className={this.props.classes}
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onAnimationEnd={this.handleAnimationEnd}
          placeholder="Enter romanisation" />
    );
  }
}

export default AnswerInput;
