import React from 'react';
import _ from 'lodash';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const FIELDS = [
  { label: 'Rank', numeric: 'true'},
  { label: 'Symbol', numeric: 'false'},
  { label: 'Name', numeric: 'false'},
  { label: 'Circulating Supply', numeric: 'true'},
  { label: 'Price (EUR)', numeric: 'true'},
  { label: 'Price (USD)', numeric: 'true'},
  { label: '% change (24h)', numeric: 'true'},
];

const CoinTableHead = () => {
    return (
        <TableHead>
          <TableRow>
          { _.map(FIELDS, ({ label, numeric }) => {
                    return <TableCell numeric={numeric}>{label}</TableCell>
                })}
          </TableRow>
        </TableHead>
    );
};

export default CoinTableHead;