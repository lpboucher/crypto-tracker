import React, { Fragment, Component } from 'react';

import TextField from '@material-ui/core/TextField';

import { TRADE_CURRENCY } from '../constants/DropOptions';

class TradeDropDown extends Component {
    state = {
        tradeCurrency: 'Select...',
    };

    handleCurrencyChange = (event, value) => {
        this.setState({tradeCurrency: event.target.value});
    };

    render() {
        const { tradeCurrency } = this.state;
        const { input, label, name, meta: { error, touched} } = this.props;
        return (
            <Fragment>
                <TextField
                    { ...input }
                    id={label}
                    select
                    label={label}
                    name={name}
                    value={tradeCurrency}
                    onChange={this.handleCurrencyChange}
                    InputLabelProps={{ shrink: true }}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                        width: 250,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        <option value="">Select...</option>
                        {TRADE_CURRENCY.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                    </TextField>
                <div className="red-text" style={{ marginBottom: '20px'}}>
                    { touched && error }
                </div>
            </Fragment>
        );
    }
}

export default TradeDropDown;