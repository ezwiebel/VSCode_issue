import * as types from './types';

export function setElements(elements) {
  return {
    type: types.SET_ELEMENTS,
    payload: {
      elements,
    },
  }
}

/***************
 * backend API *
 ***************/

export function requestElements(level) {
  return (dispatch) => {
    const resource = 'http://localhost:8080/levels/' + level;
    return fetch(resource)
      .then((res) => res.json())
      .then((json) => dispatch(setElements(json)))
      .catch((err) => {
        console.log("Failure while fetching " + level + "s.");
      });
  }
}

