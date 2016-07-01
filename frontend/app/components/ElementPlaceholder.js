import React, { Component } from 'react';

export default class ElementPlaceholder extends Component {
  render() {
    return (
      <div>
        <h1>No selected element</h1>
        <p>Please select an element to see its description.</p>
      </div>
    );
  }
}
