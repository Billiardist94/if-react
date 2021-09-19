const initialState = 1;

export const adultReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_ADULT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT_ADULT') {
    return state - 1;
  }

  return state;
};
