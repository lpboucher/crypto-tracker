import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, getCoinsByKey, getCoinListByKey } from '../../ducks/coins';
import { updateFilterOption, getNumberOfItems, getCoinSortingKey } from '../../ducks/filters';
import MarketComponent from './MarketComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingMarket = withLoading(MarketComponent);

class MarketContainer extends Component {

    componentDidMount() {
        this.props.fetchCoins();
      };

    render() {
        const { coins, updateFilterOption, itemsToShow, sortBy } = this.props;
        return (
        <LoadingMarket
            coinsToShow={itemsToShow}
            sortCoinsBY={sortBy}
            coins={coins}
            handleOptionChange={updateFilterOption}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: {
            byKey: getCoinsByKey(state),
            allKeys: getCoinListByKey(state),
        },
        itemsToShow: getNumberOfItems(state),
        sortBy: getCoinSortingKey(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins()),
        updateFilterOption: (option, filter) => dispatch(updateFilterOption(option, filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);