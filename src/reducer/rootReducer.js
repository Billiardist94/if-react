import { combineReducers } from 'redux';
import { adultReducer } from './adultReducer';
import { roomsReducer } from './roomsReducer';
import { childrenReducer } from './childrenReducer';

const rootReducer = combineReducers({
  adult: adultReducer,
  rooms: roomsReducer,
  children: childrenReducer,
});

export default rootReducer;
