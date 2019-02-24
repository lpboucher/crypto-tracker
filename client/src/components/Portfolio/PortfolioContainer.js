import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions, getTradesById, getSortedTradeListById } from '../../ducks/trades';
import { getPositions } from '../../ducks/positions';
import PortfolioComponent from './PortfolioComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingPortfolio = withLoading(PortfolioComponent);

class PortfolioContainer extends Component {
    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { transactions, positions } = this.props;
        return (
        <LoadingPortfolio
            trades={transactions}
            positions={positions}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        transactions: { byId: getTradesById(state),
            allIds: getSortedTradeListById(state),
        },
        positions: getPositions(state)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);