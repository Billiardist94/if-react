import { handleActions } from 'redux-actions';

import changeTheme from '../actionCreator/theme';

import { themeLight, themeDark } from '../constants/theme';

const defaultState = { theme: themeDark };

const themeReducer = handleActions(
  {
    [changeTheme]: (state) => ({
      ...state,
      theme: state.theme === themeLight ? themeDark : themeLight,
    }),
  },
  defaultState
);

export default themeReducer;
