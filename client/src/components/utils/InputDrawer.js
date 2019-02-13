import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector, change } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import { enterTradeDetails } from '../../ducks/trades';
import validate from './validations/tradeValidate';
import { CURRENCIES } from '../../constants/DropOptions';

import renderTextField from './forms/renderTextField';
import renderSelectField from './forms/renderSelectField';
import renderRadioGroup from './forms/renderRadioGroup';
import renderDatePicker from './forms/renderDatePicker';

import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

const styles = {
    paper: {
      width: '25%',
      padding: '50px'
    },
    root: {
        marginBottom: '20px',
    }
  };

const selector = formValueSelector('inputTradeForm');

let InputDrawer = ({
                    handleSubmit,
                    isOpen,
                    handleClose,
                    coinSymbols,
                    coinNames,
                    coinName,
                    coinTickerCode,
                    change,
                    classes
                }) => {
    return (
        <Fragment>
            <Drawer anchor="right" open={isOpen} onClose={handleClose} classes={{paper: classes.paper}}>
                <Typography align="center" component="h1" variant="headline" gutterBottom>
                    Input new trade
                </Typography>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="date" component={renderDatePicker} label="Date" fullWidth variant='outlined'/>
                    </div>
                    { coinSymbols &&
                    <div>
                        <Field name="symbol" component={renderSelectField} onFocus={() => change('coinName', coinName)}label="Symbol" fullWidth variant='outlined'>
                        { coinSymbols.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                        </Field>
                    </div> }
                    { coinNames && coinSymbols &&
                    <div>
                        <Field name="coinName" component={renderSelectField} label="Coin Name" fullWidth variant='outlined'>
                        { coinSymbols.map(option => {
                            return <option key={coinNames[option].name} value={coinNames[option].name}>{coinNames[option].name}</option>
                        })}
                        </Field>
                    </div> }
                    <Divider classes={{root: classes.root}}/>
                    <div>
                        <Field name="type" component={renderRadioGroup}>
                            <FormLabel component="legend">Transaction Type</FormLabel>
                            <FormControlLabel 
                                value="Buy"
                                control={<Radio color="primary" />}
                                label="Buy"
                                labelPlacement="start"
                            />
                            <FormControlLabel 
                                value="Sell"
                                control={<Radio color="primary" />}
                                label="Sell"
                                labelPlacement="start"
                            />
                        </Field>
                    </div>
                    <Divider classes={{root: classes.root}}/>
                    <div>
                        <Field name="quantity" component={renderTextField} label="Quantity" fullWidth variant='outlined'/>
                    </div>
                    <div>
                        <Field name="price_amount" component={renderTextField} label="Price" fullWidth variant='outlined'/>
                    </div>
                    <div>
                        <Field name="price_currency" component={renderSelectField} label="Paid in" fullWidth variant='outlined'>
                        { CURRENCIES.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                        </Field>
                    </div>
                    <div>
                    <Button onClick={() => change('coinTickerCode', coinTickerCode)}type="submit" align="center" variant="raised" color="primary" >
                                Submit Transaction
                    </Button>
                    </div>
                </form>
            </Drawer>
      </Fragment>
    );
};

let inputTradeForm = reduxForm({
    validate: validate,
    form: 'inputTradeForm',
    enableReinitialize: true
  })(InputDrawer)


//NEED TO ADD AUTOMATIC FILLING OF PRICE BASED ON DATA, SYMBOL
function mapStateToProps(state, {coinNames}) {
    const getSymbol = selector(state, 'symbol');
    return {
        coinName: (coinNames && getSymbol) ? coinNames[getSymbol].name : '',
        coinTickerCode: (coinNames && getSymbol) ? coinNames[getSymbol].id : '',
        initialValues: state.transactions.activeTradeValues,
    };
};

let InitializeFromStateForm = connect(mapStateToProps, {enterTradeDetails, change})(inputTradeForm)

export default withStyles(styles)(InitializeFromStateForm);

