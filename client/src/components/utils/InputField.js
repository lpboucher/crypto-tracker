import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

const InputField = ({ input, name, label, meta: { error, touched} }) => {
    return (
        <Fragment>
            <TextField
              {...input}
              required
              id={label}
              name={name}
              label={label}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <div className="red-text" style={{ marginBottom: '20px'}}>
            { touched && error }
            </div>
        </Fragment>
    );
};

export default InputField;