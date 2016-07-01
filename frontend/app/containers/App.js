import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as ElementActions from '../actions/elements';

import ElementList from '../components/ElementList';
import Header from '../components/Header';

import * as elementsSelectors from '../selectors/elements';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Header
          level={this.props.level}
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <ElementList
                elements={this.props.elements}
                level={this.props.level}
              />
            </div>
            <div className="col-md-8">
              {this.props.children}
            </div>
          </div>
        </div>

        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    elements: elementsSelectors.list(state),
    level: props.params.level,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
