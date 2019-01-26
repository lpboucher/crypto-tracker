import React from 'react';
import _ from 'lodash';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { COIN_FIELDS, TRANSACTION_FIELDS } from '../../constants/Fields';

const CoinTableHead = ({tableType}) => {
    const FIELDS = tableType === "transactions" ? TRANSACTION_FIELDS : COIN_FIELDS;
    return (
        <TableHead>
          <TableRow>
          { _.map(FIELDS, ({ label, numeric, id }) => {
                    return <TableCell key={`${id}${label}`} numeric={numeric}>{label}</TableCell>
                })}
          </TableRow>
        </TableHead>
    );
};

export default CoinTableHead;