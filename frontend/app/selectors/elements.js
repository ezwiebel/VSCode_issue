export function get(state, elementId) {
  return state.elements[elementId];
}

export function list(state) {
  const elementsIds = Object.keys(state.elements);
  return elementsIds.map(id => state.elements[id]);
}
