import React from 'react';
import _ from 'lodash';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const COINFIELDS = [
  { label: 'Rank', numeric: true},
  { label: 'Symbol', numeric: false},
  { label: 'Name', numeric: false},
  { label: 'Circulating Supply', numeric: true},
  { label: 'Price (EUR)', numeric: true},
  { label: 'Price (USD)', numeric: true},
  { label: '% change (24h)', numeric: true},
];

const TRANSACTIONFIELDS = [
    { label: 'Rank', numeric: true},
    { label: 'Symbol', numeric: false},
    { label: 'Name', numeric: false},
    { label: 'Buy/Sell', numeric: false},
    { label: 'Price', numeric: true},
    { label: 'Quantity', numeric: true},
  ];

const CoinTableHead = ({tableType}) => {
    const FIELDS = tableType === "transactions" ? TRANSACTIONFIELDS : COINFIELDS;
    return (
        <TableHead>
          <TableRow>
          { _.map(FIELDS, ({ label, numeric, id }) => {
                    return <TableCell key={`${id}${label}`} numeric={numeric}>{label}</TableCell>
                })}
          </TableRow>
        </TableHead>
    );
};

export default CoinTableHead;