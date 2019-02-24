import React from 'react';
import _ from 'lodash';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TABLE_FIELDS } from '../../constants/Fields';

const CoinTableHead = ({tableType}) => {
    return (
        <TableHead>
          <TableRow>
          { _.map(TABLE_FIELDS[tableType], ({ label, numeric, id }) => {
                    return <TableCell key={`${id}${label}`} numeric={numeric}>{label}</TableCell>
                })}
          </TableRow>
        </TableHead>
    );
};

export default CoinTableHead;