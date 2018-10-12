import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CoinTableHead = () => {
    return (
        <TableHead>
          <TableRow>
            <TableCell numeric>Rank</TableCell>
            <TableCell >Symbol</TableCell>
            <TableCell >Name</TableCell>
            <TableCell numeric>Circular Supply</TableCell>
            <TableCell numeric>Max Supply</TableCell>
            <TableCell numeric>Price (EUR)</TableCell>
            <TableCell numeric>Price (USD)</TableCell>
            <TableCell numeric>% change (24h)</TableCell>
          </TableRow>
        </TableHead>
    );
};

export default CoinTableHead;