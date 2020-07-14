import { combineReducers } from 'redux';

export default combineReducers({
  placeholder: () => {
    return { delete: 'this' };
  }
});
