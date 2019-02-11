import React, { Fragment } from 'react'

import TextField from '@material-ui/core/TextField';

const renderDatePicker = ({input, label, meta: {touched, error}, ...custom }) => (
    <Fragment>
          <TextField 
            label={label}
            {...input} {...custom}
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
        />
          <div style={{ marginBottom: '20px', color: 'red'}}>
            { touched && error }
          </div>
    </Fragment>
  );
  
  export default renderDatePicker