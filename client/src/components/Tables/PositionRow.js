import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PositionRow = ({ position, ...filters }) => {
    const { date, symbol, name, quantityHeld, totalCost, currentPrice, gainLoss, paid_in } = position;
    const displayCurr = filters.displayIn !== "as paid" ? filters.displayIn : paid_in;
    const averageCost = totalCost[displayCurr] / quantityHeld;
    return (
        <TableRow>
            <TableCell>{date.slice(0,10)}</TableCell>
            <TableCell>{symbol}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell numeric>{quantityHeld}</TableCell>
            <TableCell numeric>{averageCost}</TableCell>
            <TableCell numeric>{`${totalCost[displayCurr]} ${displayCurr}`}</TableCell>
            <TableCell numeric></TableCell>
            <TableCell numeric></TableCell>
        </TableRow>
    );
};

export default PositionRow;