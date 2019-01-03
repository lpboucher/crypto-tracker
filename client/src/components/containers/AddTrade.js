import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitTrade, openModal, closeModal } from '../../actions';

import InputModal from '../utils/InputModal';

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
        const { submitTrade, openModal, closeModal, coins, isOpen } = this.props;
        const altOptions = coins ? coins.allSymbols : null;
        return (
            <Fragment>
                <Button 
                    onClick={openModal}
                    variant="fab"
                    style={{position: "fixed", right: 20, bottom: 20}}
                    color="secondary"
                >
                    <AddIcon />
                </Button>
                <InputModal 
                    onSubmit={submitTrade}
                    isOpen={isOpen}
                    handleClose={closeModal}
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
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
    };
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
        isOpen: state.views.isModalOpen,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrade);