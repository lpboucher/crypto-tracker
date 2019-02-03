import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import _ from 'lodash';
import { enterTradeDetails } from '../../ducks/trades';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputField from './InputField';
import OptionDropdown from './OptionDropdown';

const selector = formValueSelector('inputTradeForm');

let InputDrawer = ({
                    handleSubmit,
                    isOpen,
                    handleClose,
                    handleChange,
                    fields,
                    dynamicOptions,
                    coinName
                }) => {
    return (
        <Fragment>
            <Drawer anchor="bottom" open={isOpen} onClose={handleClose}>
                <Paper>
                    <Typography align="center" component="h1" variant="headline" gutterBottom>
                        Input new trade
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={24}>
                            { _.map(fields, ({ label, name, visible, index, type, options, autofill }) => {
                                return (visible &&
                                    <Grid key={`${index}${label}`} item xs={12} sm={6} >
                                        {type === "dropdown" ? (
                                                <Field 
                                                    component={OptionDropdown}
                                                    type="text"
                                                    label={label}
                                                    name={name}
                                                    id={`${index}${label}`}
                                                    optionChange={handleChange}
                                                    options={options.length ? options : dynamicOptions}
                                                />
                                                ) : (
                                                <Field 
                                                    component={InputField}
                                                    type="text"
                                                    label={label}
                                                    name={name}
                                                    autofill={autofill}
                                                    autoShow={coinName}
                                                />
                                        )}
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
                    </Paper>
            </Drawer>
      </Fragment>
    );
};

let inputTradeForm = reduxForm({
    form: 'inputTradeForm'
  })(InputDrawer)

function mapStateToProps(state, {coinNames}) {
    const getSymbol = selector(state, 'symbol')
    return {
        coinName: (coinNames && getSymbol) ? coinNames[getSymbol].name : '',
        initialValues: state.transactions.activeTradeValues,
        enableReinitialize: true
    };
};

let InitializeFromStateForm = connect(mapStateToProps, {enterTradeDetails})(inputTradeForm)
//need to eventually add validation

export default InitializeFromStateForm;

