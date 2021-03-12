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

  render() {
    return (
      <input type="text"
          style={{fontSize: '2rem'}}
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter romanisation" />
    );
  }
}

export default AnswerInput;
