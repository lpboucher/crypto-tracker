import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

const OptionDropdown = ({id, label, value, optionChange, options}) => {
    return (
        <Fragment>
            <TextField
                    id={id}
                    select
                    label={label}
                    value={value}
                    onChange={optionChange}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                        width: 250,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                    {options.map(option => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                </TextField>
            </Fragment>
    );
};

export default OptionDropdown;