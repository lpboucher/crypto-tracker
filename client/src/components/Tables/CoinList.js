import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CoinTableHead from './CoinTableHead';

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  };

const CoinList = ({recordType, classes, children}) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <CoinTableHead tableType={recordType} />
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default withStyles(styles)(CoinList);