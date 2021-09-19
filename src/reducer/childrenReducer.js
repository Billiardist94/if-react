const initialState = 0;

export const childrenReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_CHILDREN') {
    return state + 1;
  }

  if (action.type === 'DECREMENT_CHILDREN') {
    return state - 1;
  }

  return state;
};
