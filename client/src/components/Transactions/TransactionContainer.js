import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../ducks/trades';
import { updateFilterOption } from '../../ducks/filters';
import TransactionComponent from './TransactionComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingTrades = withLoading(TransactionComponent);

class TransactionContainer extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { transactions, itemsToShow, updateFilterOption, displayIn } = this.props;
        return (
        <LoadingTrades
            trades={transactions}
            displayIn={displayIn}
            tradesToShow={itemsToShow}
            handleOptionChange={updateFilterOption}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        transactions: state.transactions,
        itemsToShow: state.filters.itemsToShow,
        displayIn: state.filters.displayIn
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
        updateFilterOption: (option, filter) => dispatch(updateFilterOption(option, filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer);