import React, { Component } from 'react';

class SubmitButton extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.checkAnswer();
  };

  render() {
    return (
      <input type="submit" value="Enter" onClick={this.handleClick} />
    );
  }
}

export default SubmitButton;
