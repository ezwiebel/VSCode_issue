import * as types from '../actions/types';

function mapElementsByIds(elements = []) {
  let elementsById = {};
  elements.forEach((element) => {
    elementsById[element.id] = element;
  });
  return elementsById;
}

export default function elements(state = {}, action) {
  switch (action.type) {
    case types.SET_ELEMENTS:
      return mapElementsByIds(action.payload.elements);

    default:
      return state;
  }
}
