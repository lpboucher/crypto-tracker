import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
        <Fragment>
            <TextField
              label={label}
              {...input}
              {...custom}
            />
            <div style={{ marginBottom: '20px', color: 'red'}}>
            { touched && error }
            </div>
        </Fragment>
    );
};

export default renderTextField;