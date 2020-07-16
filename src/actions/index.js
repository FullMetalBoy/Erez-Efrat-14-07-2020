import { FETCH_RATE, FETCH_ERROR, ADD_ITEM, RECEIVE_ITEM } from './types';
import exchange from '../apis/exchange';

export const fetchRate = () => async dispatch => {
  const params = new URLSearchParams();
  params.append('symbols', 'ILS');
  params.append('base', 'USD');
  try {
    const response = await exchange.get('latest', params);

    dispatch({
      type: FETCH_RATE,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: 'exchange service unavailable'
    });
  }
};

export const addItem = item => {
  item = {
    ...item,
    price: parseFloat(item.price),
    estDeliveryDate: item.estDeliveryDate.toLocaleDateString()
  };

  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const receiveItem = item => {
  return {
    type: RECEIVE_ITEM,
    payload: item
  };
};
