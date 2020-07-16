import React from 'react';

import { Table } from 'semantic-ui-react';

const SimpleTable = props => {
  const renderHeaders = () => {
    return props.headers.map(header => (
      <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
    ));
  };

  const renderRows = () => {
    return props.rows.map((row, idx) => {
      const data = props.keys.map((key, idx) => (
        <Table.Cell key={idx}>{row[key]}</Table.Cell>
      ));
      return <Table.Row key={idx}>{data}</Table.Row>;
    });
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>{renderHeaders()}</Table.Row>
      </Table.Header>
      <Table.Body>{renderRows()}</Table.Body>
    </Table>
  );
};

SimpleTable.defaultProps = {
  headers: [],
  keys: [],
  rows: []
};

export default SimpleTable;
