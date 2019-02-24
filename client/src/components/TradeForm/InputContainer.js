import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '../../ducks/views';
import { fetchCoins, getCoinsBySymbol, getCoinListBySymbol } from '../../ducks/coins';
import { submitTrade, fetchTransactions, getActiveTrade } from '../../ducks/trades';
import InputDrawer from './InputDrawer';

class InputContainer extends Component {
    render() {
        const { coins, transactions, isOpen, submitTrade, closeDrawer } = this.props;
        return (
            <div>
                <InputDrawer 
                    onSubmit={submitTrade}
                    isOpen={isOpen}
                    handleClose={closeDrawer}
                    coinSymbols={coins ? coins.allSymbols : null}
                    coinNames={coins ? coins.bySymbol : null}
                    initialValues={transactions}
                />
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: {
            bySymbol: getCoinsBySymbol(state),
            allSymbols: getCoinListBySymbol(state),
        },
        transactions: getActiveTrade(state),
        isOpen: state.views.isDrawerOpen,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        submitTrade: (trade) => dispatch(submitTrade(trade)),
        fetchCoins: () => dispatch(fetchCoins()),
        fetchTransactions: () => dispatch(fetchTransactions()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);