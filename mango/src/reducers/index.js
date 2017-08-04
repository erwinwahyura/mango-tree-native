import { combineReducers } from 'redux';

import grow from './grow';
import harvest from './harvest';

export default combineReducers({
  grow: grow,
  harvest: harvest
})
