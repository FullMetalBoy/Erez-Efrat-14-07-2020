import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';

import SimpleTable from './SimpleTable';

const ItemTables = ({ itemsRows, aggregatedItemsRows }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderItemsTable = () => {
    return (
      <Tab.Pane>
        <SimpleTable
          headers={[
            'Name',
            'Store',
            'Price (USD/ILS)',
            'Est. Delivery Date',
            'Received?'
          ]}
          keys={['name', 'store', 'price', 'estDeliveryDate', 'received']}
          rows={itemsRows}
        />
      </Tab.Pane>
    );
  };

  const renderStoresTable = () => {
    return (
      <Tab.Pane>
        <SimpleTable
          headers={['Store', 'Sum of all Orders (USD/ILS)']}
          keys={['name', 'sum']}
          rows={aggregatedItemsRows}
        />
      </Tab.Pane>
    );
  };

  const panes = [
    {
      menuItem: 'Items',
      render: renderItemsTable
    },
    {
      menuItem: 'Stores',
      render: renderStoresTable
    }
  ];

  return (
    <Tab
      panes={panes}
      activeIndex={tabIndex}
      onTabChange={(e, { activeIndex }) => setTabIndex(activeIndex)}
    />
  );
};

export default ItemTables;
