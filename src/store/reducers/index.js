import { combineReducers } from 'redux';

import main from './main';
import theme from './theme';
import common from './common';
import auth from './auth';

export default combineReducers({
  main,
  theme,
  common,
  auth,
});
