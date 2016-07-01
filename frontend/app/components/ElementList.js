import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ElementList extends Component {
  static propTypes = {
    elements: PropTypes.array.isRequired,
    level: PropTypes.string.isRequired,
  };

  elementList() {
    const { elements, level } = this.props;

    if (elements.length === 0) {
      return (
        <p className="placeholder">No elements available for this level</p>
      );
    }

    return elements.map((req) => (
      <Link
        key={req.id}
        to={"/" + level + "/elements/" + req.id}
        className="list-group-item"
        activeClassName="active"
      >
        {req.id}
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <h3 className="element-list-title">{this.props.level}</h3>
        <div className="list-group">
          {this.elementList()}
        </div>
      </div>
    );
  }
}
