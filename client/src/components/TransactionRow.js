import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TransactionRow = ({index, trade, key}) => {
    return (
        <TableRow key={key}>
            <TableCell component="th" scope="row" numeric>{index+1}</TableCell>
            <TableCell>{trade.symbol}</TableCell>
            <TableCell>{trade.coinName}</TableCell>
            <TableCell>{trade.type}</TableCell>
            <TableCell numeric>{trade.price}</TableCell>
            <TableCell numeric>{trade.quantity}</TableCell>
        </TableRow>
    );
};

export default TransactionRow;