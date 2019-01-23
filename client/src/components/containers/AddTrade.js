import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitTrade, openDrawer, closeDrawer } from '../../actions';

import InputDrawer from '../utils/InputDrawer';

import { TRANSACTION_FIELDS } from '../../constants/Fields';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddTrade extends Component {
    state = {
        symbol: 'BTC',
        type: 'Buy',
        currency: 'EUR'
      };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { submitTrade, openDrawer, closeDrawer, coins, isOpen } = this.props;
        const altOptions = coins ? coins.allSymbols : null;
        return (
            <Fragment>
                <Button 
                    onClick={openDrawer}
                    variant="fab"
                    style={{position: "fixed", right: 20, bottom: 20}}
                    color="secondary"
                >
                    <AddIcon />
                </Button>
                <InputDrawer 
                    onSubmit={submitTrade}
                    isOpen={isOpen}
                    handleClose={closeDrawer}
                    handleChange={this.handleChange}
                    fields={TRANSACTION_FIELDS}
                    dynamicOptions={altOptions}
                    />
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitTrade: (trade) => dispatch(submitTrade(trade)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
        isOpen: state.views.isDrawerOpen,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrade);