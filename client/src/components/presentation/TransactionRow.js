import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TransactionRow = ({ index, trade, children }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row" numeric>{index+1}</TableCell>
            <TableCell>{trade.symbol}</TableCell>
            <TableCell>{trade.coinName}</TableCell>
            <TableCell>{trade.type}</TableCell>
            <TableCell numeric>{trade.quantity}</TableCell>
            <TableCell numeric>{trade.price.amount}</TableCell>
            <TableCell>{trade.price.currency}</TableCell>
            <TableCell>{children}</TableCell>
        </TableRow>
    );
};

export default TransactionRow;