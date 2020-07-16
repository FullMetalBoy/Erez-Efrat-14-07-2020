import { RECEIVE_ITEM } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
