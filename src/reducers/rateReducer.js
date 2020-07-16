import { FETCH_RATE, FETCH_ERROR } from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case FETCH_RATE:
      return action.payload.rates.ILS;
    case FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
};
