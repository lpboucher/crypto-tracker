import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../ducks/trades';
import { getPositions, getPositionSymbols } from '../../ducks/positions';
import { updateFilterOption, getDisplayCurrency } from '../../ducks/filters';
import PortfolioComponent from './PortfolioComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingPortfolio = withLoading(PortfolioComponent);

class PortfolioContainer extends Component {
    //need to think about fetching data as dashboard mounts
    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { positions, updateFilterOption, displayIn } = this.props;
        return (
        <LoadingPortfolio
            positions={positions}
            displayIn={displayIn}
            handleOptionChange={updateFilterOption}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        positions: { bySymbol: getPositions(state),
            allSymbols: getPositionSymbols(state),
        },
        displayIn: getDisplayCurrency(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
        updateFilterOption: (option, filter) => dispatch(updateFilterOption(option, filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);