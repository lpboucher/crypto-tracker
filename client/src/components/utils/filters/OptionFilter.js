import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';

const OptionDropdown = ({ input, id, name, label, value, optionChange, options }) => {
    return (
        <Fragment>
            <TextField
                    {...input}
                    id={id}
                    name={name}
                    select
                    label={label}
                    value={value}
                    onChange={(e) => optionChange(e.target.value, e.target.name)}
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