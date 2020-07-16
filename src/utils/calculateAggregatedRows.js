export default (items, exchangeRate) => {
  const aggregatedRows = items.reduce((stores, item) => {
    let store = stores.find(store => store.name === item.store);
    if (!store) {
      store = { name: item.store, sum: 0 };
      stores.push(store);
    }
    store.sum += item.price;
    return stores;
  }, []);

  aggregatedRows.forEach(
    row => (row.sum = `${row.sum} / ${(row.sum * exchangeRate).toFixed(2)}`)
  );

  return aggregatedRows;
};
