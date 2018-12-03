import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CoinTableHead from './CoinTableHead';
import CoinRow from './CoinRow';
import TransactionRow from './TransactionRow';

const CoinList = ({recordType, coins}) => {
    return (
        <Paper>
            <Table>
                <CoinTableHead />
                <TableBody>
                { coins.map((currentCoin, index) => (
                    <Fragment>
                    {recordType === "transactions" ? (
                            <TransactionRow index={index} key={currentCoin._id} trade={currentCoin} />
                        ) : (
                            <CoinRow key={currentCoin.id} coin={currentCoin} />
                        )}
                    </Fragment>
                )) }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default CoinList;