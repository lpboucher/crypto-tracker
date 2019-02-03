import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';

const renderRadioGroup = ({ input, children, ...rest }) => (
    <RadioGroup {...input} {...rest}
      onChange={(event, value) => input.onChange(value)}
      row
      children={children}/>
  )

export default renderRadioGroup;