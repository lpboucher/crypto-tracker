import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions, getTradesById, getSortedTradeListById } from '../../ducks/trades';
import { updateFilterOption, getNumberOfItems, getDisplayCurrency, getTradeSortingKey } from '../../ducks/filters';
import TransactionComponent from './TransactionComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingTrades = withLoading(TransactionComponent);

class TransactionContainer extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { transactions, itemsToShow, updateFilterOption, displayIn, sortBy } = this.props;
        return (
        <LoadingTrades
            trades={transactions}
            sortTradesBy={sortBy}
            displayIn={displayIn}
            tradesToShow={itemsToShow}
            handleOptionChange={updateFilterOption}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        transactions: { byId: getTradesById(state),
                        allIds: getSortedTradeListById(state)
                    },
        itemsToShow: getNumberOfItems(state),
        displayIn: getDisplayCurrency(state),
        sortBy: getTradeSortingKey(state)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
        updateFilterOption: (option, filter) => dispatch(updateFilterOption(option, filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer);