import { connect } from 'react-redux';
import ElementDescription from '../components/ElementDescription';
import * as elementsSelectors from '../selectors/elements';

function mapStateToProps(state, props) {
  const elementId = props.params.id;
  return {
    element: elementsSelectors.get(state, elementId),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementDescription);
