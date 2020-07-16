import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import itemsReducer from './itemsReducer';
import rateReducer from './rateReducer';
import receivedItemsReducer from './receivedItemsReducer';

export default combineReducers({
  items: itemsReducer,
  receivedItems: receivedItemsReducer,
  exchangeRate: rateReducer,
  form: formReducer
});
