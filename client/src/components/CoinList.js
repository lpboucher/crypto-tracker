import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CoinTableHead from './CoinTableHead';
import CoinRow from './CoinRow';
import TransactionRow from './TransactionRow';

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  };

const CoinList = ({recordType, item, list, numberOfItems, classes}) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <CoinTableHead tableType={recordType} />
                <TableBody>
                { list.slice(0, numberOfItems).map((currentItem, index) => (
                    <Fragment key={item[currentItem].id}>
                    {recordType === "transactions" ? (
                            <TransactionRow index={index} key={item[currentItem]._id} trade={item[currentItem]} />
                        ) : (
                            <CoinRow key={item[currentItem].id} coin={item[currentItem]} />
                        )}
                    </Fragment>
                        )) }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default withStyles(styles)(CoinList);