import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import TradeField from './TradeField';
import { TRANSACTION_FIELDS } from '../constants/Fields';

let InputTrade = ({handleSubmit}) => {

    return (
        <Fragment>
            <Typography align="center" component="h1" variant="h1" gutterBottom>
                Input new trade
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={24}>
                    { _.map(TRANSACTION_FIELDS, ({ label, name }) => {
                        return (label !== "Rank" &&
                            <Grid key={name} item xs={12} sm={6} >
                                <Field component={TradeField} type="text" label={label} name={name} />
                            </Grid>
                        )
                    })}
                    <Grid item m={24} >
                        <Button type="submit" align="center" variant="raised" color="primary" >
                            Add Transaction
                        </Button>
                    </Grid>
                </Grid>
            </form>
      </Fragment>
    );
};

InputTrade = reduxForm({
    form: 'inputTrade'
})(InputTrade);

//need to eventually add validation

export default InputTrade;