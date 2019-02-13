import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TransactionRow = ({ index, trade, children, ...filters }) => {
    const { date, symbol, coinName, type, quantity, paid_in, prices } = trade;
    const displayCurr = filters.displayIn !== "as paid" ? filters.displayIn : paid_in;
    return (
        <TableRow>
            <TableCell component="th" scope="row" numeric>{index+1}</TableCell>
            <TableCell>{date.slice(0,10)}</TableCell>
            <TableCell>{symbol}</TableCell>
            <TableCell>{coinName}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell numeric>{quantity}</TableCell>
            <TableCell numeric>{prices[displayCurr]}</TableCell>
            <TableCell>{displayCurr}</TableCell>
            <TableCell>{children}</TableCell>
        </TableRow>
    );
};

export default TransactionRow;