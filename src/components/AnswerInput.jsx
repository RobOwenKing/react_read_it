import React, { Component } from 'react';

class AnswerInput extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.checkAnswer(this.state.inputValue);
    }
  };

  render() {
    return (
      <input type="text"
          style={{fontSize: '2rem'}}
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter romanisation" />
    );
  }
}

export default AnswerInput;
