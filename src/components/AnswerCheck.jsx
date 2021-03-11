import React, { Component } from 'react';

class AnswerCheck extends Component {
  componentToRender = () => {
    if (this.props.content === 'correct') {
      return <span>&#10003;</span>;
    } else {
      // return <span onClick={this.state.handleClick}>Show answer</span>;
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
