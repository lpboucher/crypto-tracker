import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import CoinTableHead from './CoinTableHead';
import CoinRow from './CoinRow';

const CoinList = ({coins}) => {
    return (
        <Paper>
            <Table>
                <CoinTableHead />
                <TableBody>
                { coins.map(currentCoin => (
                    <CoinRow key={currentCoin.id} coin={currentCoin} />
                )) }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default CoinList;