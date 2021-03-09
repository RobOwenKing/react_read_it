import React, { Component } from 'react';

class Prompt extends Component {
  render() {
    return (
      <div style={{fontSize: '3rem'}}>{this.props.prompt}</div>
    );
  }
}

export default Prompt;
