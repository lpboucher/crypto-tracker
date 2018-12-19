export const COIN_FIELDS = [
    { label: 'Rank', numeric: true},
    { label: 'Symbol', numeric: false},
    { label: 'Name', numeric: false},
    { label: 'Circulating Supply', numeric: true},
    { label: 'Price (EUR)', numeric: true},
    { label: 'Price (USD)', numeric: true},
    { label: '% change (24h)', numeric: true},
  ];
  
export const TRANSACTION_FIELDS = [
    { label: 'Rank', name: 'rank', numeric: true},
    { label: 'Symbol', name: 'symbol', numeric: false, type: 'dropdown'},
    { label: 'Name', name: 'coinName', numeric: false},
    { label: 'Buy/Sell', name: 'type', numeric: false, type: 'dropdown'},
    { label: 'Quantity', name: 'quantity', numeric: true},
    { label: 'Price', name: 'price_amount', numeric: true},
    { label: 'Paid in', name: 'price_currency', numeric: false, type: 'dropdown'}
];