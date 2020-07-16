import { ADD_ITEM, RECEIVE_ITEM } from '../actions/types';

const INITIAL_STATE = [
  {
    name: 'item 1',
    store: 'amazon',
    price: 20,
    estDeliveryDate: new Date().toLocaleDateString()
  },
  {
    name: 'item 2',
    store: 'ebay',
    price: 30,
    estDeliveryDate: new Date().toLocaleDateString()
  },
  {
    name: 'item 3',
    store: 'ebay',
    price: 40,
    estDeliveryDate: new Date().toLocaleDateString()
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case RECEIVE_ITEM:
      return state.filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
};
