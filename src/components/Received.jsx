import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addItem, receiveItem } from '../actions';
import history from '../history';
import ItemTables from './ItemTables';
import calculateAggregatedRows from '../utils/calculateAggregatedRows';

const Received = ({ receivedItems, exchangeRate }) => {
  const itemsRows = receivedItems.map(item => {
    return {
      ...item,
      price: `${item.price} / ${(item.price * exchangeRate).toFixed(2)}`
    };
  });

  const aggregatedItemsRows = calculateAggregatedRows(
    receivedItems,
    exchangeRate
  );

  return (
    <div>
      <ItemTables
        itemsRows={itemsRows}
        aggregatedItemsRows={aggregatedItemsRows}
      />
      <Divider />
      <Button onClick={() => history.push('/Erez-Efrat-14-07-2020/List')}>
        Go To List
      </Button>
    </div>
  );
};

const mapStateToProps = ({ receivedItems, exchangeRate }) => {
  return { receivedItems, exchangeRate };
};

export default connect(mapStateToProps, { addItem, receiveItem })(Received);
