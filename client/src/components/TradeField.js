import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

export default ({ input, name, label, meta: { error, touched} }) => {
    return (
        <Fragment>
            <TextField
              {...input}
              required
              id={name}
              name={name}
              label={label}
              fullWidth
              autoComplete="fname"
            />
            <div className="red-text" style={{ marginBottom: '20px'}}>
            { touched && error }
            </div>
        </Fragment>
    );
};