import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { addItem, receiveItem } from '../actions';
import history from '../history';
import ItemTables from './ItemTables';
import calculateAggregatedRows from '../utils/calculateAggregatedRows';

const List = ({ items, exchangeRate, addItem, receiveItem }) => {
  const itemsRows = items.map(item => {
    return {
      ...item,
      price: `${item.price} / ${(item.price * exchangeRate).toFixed(2)}`,
      received: <Button onClick={() => receiveItem(item)}>Received</Button>
    };
  });

  const aggregatedItemsRows = calculateAggregatedRows(items, exchangeRate);

  return (
    <div>
      <ItemTables
        itemsRows={itemsRows}
        aggregatedItemsRows={aggregatedItemsRows}
      />
      <ItemForm onSubmit={addItem} />
      <Divider />
      <Button onClick={() => history.push('/Erez-Efrat-14-07-2020/received')}>
        Go To Received
      </Button>
    </div>
  );
};

const mapStateToProps = ({ items, exchangeRate }) => {
  return { items, exchangeRate };
};

export default connect(mapStateToProps, { addItem, receiveItem })(List);
