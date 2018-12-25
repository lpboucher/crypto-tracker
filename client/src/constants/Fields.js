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
    { label: 'Rank', name: 'rank', visible: false, numeric: true},
    { label: 'Symbol', name: 'symbol', visible: true, numeric: false, type: 'dropdown', options: []},
    { label: 'Name', name: 'coinName', visible: true,numeric: false},
    { label: 'Buy/Sell', name: 'type', visible: true, numeric: false, type: 'dropdown', options: ['Buy', 'Sell']},
    { label: 'Quantity', name: 'quantity', visible: true, numeric: true},
    { label: 'Price', name: 'price_amount', visible: true, numeric: true},
    { label: 'Paid in', name: 'price_currency', visible: true, numeric: false, type: 'dropdown', options: ['EUR', 'USD', 'ETH', 'BTC']}
];