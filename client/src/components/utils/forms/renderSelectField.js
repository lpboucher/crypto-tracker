import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => {
    return (
        <Fragment>
            <TextField
                label={label}
                select
                {...input}
                onChange={(event, index, value) => input.onChange(event.target.value)}
                children={children}
                {...custom}
                 >
                </TextField>
                <div style={{ marginBottom: '20px', color: 'red'}}>
                    { touched && error }
                </div>
            </Fragment>
    );
};

export default renderSelectField;