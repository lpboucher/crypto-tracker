import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import TradeField from './TradeField';

const FIELDS = [
    { label: 'Symbol', name: 'symbol'},
    { label: 'Coin Name', name: 'coinName'},
    { label: 'Type', name: 'type'},
];

let InputTrade = ({handleSubmit}) => {

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                { _.map(FIELDS, ({ label, name }) => {
                    return <Field component={TradeField} type="text" label={label} name={name} key={name} />
                })}
                <button type="submit">Add Transaction</button>
            </form>
        </Fragment>
    );
};

InputTrade = reduxForm({
    form: 'inputTrade'
})(InputTrade);

//need to eventually add validation

export default InputTrade;