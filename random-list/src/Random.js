import React, { Component } from 'react';

export default class Random extends Component {
  render() {
    return (
      <div className="random-text">
        <h2>Random Texts</h2>
        <ul>
          {this.props.texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
