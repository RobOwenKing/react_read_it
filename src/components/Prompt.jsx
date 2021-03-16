import React, { Component } from 'react';

class Prompt extends Component {
  render() {
    return (
      <div style={{ fontSize: '3rem' }}>
        <span style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{this.props.prompt}</span>
        &nbsp;·&nbsp;
        <span style={{ fontFamily: "'Noto Serif KR', serif" }}>{this.props.prompt}</span>
      </div>
    );
  }
}

export default Prompt;
