import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions, getTradesById, getSortedTradeListById } from '../../ducks/trades';
import OverviewComponent from './OverviewComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingOverview = withLoading(OverviewComponent);

class OverviewContainer extends Component {
    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { transactions } = this.props;
        return (
        <LoadingOverview
            trades={transactions}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        transactions: { byId: getTradesById(state),
            allIds: getSortedTradeListById(state)
        },
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);