import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitTrade } from '../../actions';

import InputModal from '../utils/InputModal';

import { TRANSACTION_FIELDS } from '../../constants/Fields';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddTrade extends Component {
    state = {
        open: false,
        symbol: 'BTC',
        type: 'Buy',
        currency: 'EUR'
      };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { submitTrade, coins } = this.props;
        const altOptions = coins ? coins.allSymbols : null;
        return (
            <Fragment>
                <Button 
                    onClick={this.handleOpen}
                    variant="fab"
                    style={{position: "fixed", right: 20, bottom: 20}}
                    color="secondary"
                >
                    <AddIcon />
                </Button>
                <InputModal 
                    onSubmit={submitTrade}
                    isOpen={this.state.open}
                    handleClose={this.handleClose}
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
        submitTrade: (trade) => dispatch(submitTrade(trade))
    };
}

function mapStateToProps(state) {
    return { 
        coins: state.coins
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrade);