import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CoinRow = ({coin}) => {
    return (
        <TableRow key={coin.id}>
            <TableCell component="th" scope="row" numeric>{coin.rank}</TableCell>
            <TableCell>{coin.symbol}</TableCell>
            <TableCell>{coin.name}</TableCell>
            <TableCell numeric>{coin.circulating_supply}</TableCell>
            <TableCell numeric>{coin.quotes.BTC.price}</TableCell>
            <TableCell numeric>{coin.quotes.ETH.price}</TableCell>
            <TableCell numeric>{coin.quotes.USD.price}</TableCell>
            <TableCell numeric>{coin.quotes.USD.market_cap}</TableCell>
            <TableCell numeric>{coin.quotes.USD.percent_change_24h}</TableCell>
        </TableRow>
    );
};

export default CoinRow;