import React, { Fragment } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';

const renderRadioGroup = ({ input, meta: { touched, error }, children, ...rest }) => (
    <Fragment>
      <RadioGroup {...input} {...rest}
      onChange={(event, value) => input.onChange(value)}
      row
      children={children}/>
      <div style={{ color: 'red'}}>
          { touched && error }
      </div>
      </Fragment>
  )

export default renderRadioGroup;