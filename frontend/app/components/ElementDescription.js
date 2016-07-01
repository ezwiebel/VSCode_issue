import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

export default class ElementDescription extends Component {
  static propTypes = {
    element: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { element } = this.props;

    return (
      <div>
        <h1 className="element-title">{element.title}</h1>
        <ReactMarkdown
          className="element-description"
          source={element.body}
        />
      </div>
    );
  }
}
