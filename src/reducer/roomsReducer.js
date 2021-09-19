const initialState = 1;

export const roomsReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_ROOMS') {
    return state + 1;
  }

  if (action.type === 'DECREMENT_ROOMS') {
    return state - 1;
  }

  return state;
};
