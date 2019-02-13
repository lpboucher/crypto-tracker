export const COIN_FIELDS = [
    { label: 'Rank', numeric: true},
    { label: 'Symbol', numeric: false},
    { label: 'Name', numeric: false},
    { label: 'Circulating Supply', numeric: true},
    { label: 'Price (BTC)', numeric: true},
    { label: 'Price (ETH)', numeric: true},
    { label: 'Price (USD)', numeric: true},
    { label: 'Market Cap (USD)', numeric: true},
    { label: '% change (24h)', numeric: true},
  ];
  
export const TRANSACTION_FIELDS = [
    { label: 'Rank', numeric: true},
    { label: 'Date', numeric: false},
    { label: 'Symbol', numeric: false},
    { label: 'Name', numeric: false},
    { label: 'Buy/Sell', numeric: false},
    { label: 'Quantity', numeric: true},
    { label: 'Price', numeric: true},
    { label: 'Paid in', numeric: false},
    { label: 'Update/Remove?', numeric: false}
];