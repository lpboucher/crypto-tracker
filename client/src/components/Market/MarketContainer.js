import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, getCoinsByKey, getCoinListByKey } from '../../ducks/coins';
import { updateFilterOption } from '../../ducks/filters';
import MarketComponent from './MarketComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingMarket = withLoading(MarketComponent);

class MarketContainer extends Component {

    componentDidMount() {
        this.props.fetchCoins();
      };

    render() {
        const { coins, itemsToShow, updateFilterOption } = this.props;
        return (
        <LoadingMarket
            coinsToShow={itemsToShow}
            coins={coins}
            handleOptionChange={updateFilterOption}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
        coinSplit: {
            byKey: getCoinsByKey(state),
            allKeys: getCoinListByKey(state),
        },
        itemsToShow: state.filters.itemsToShow,
        //bk: getCoinsByKey(state, "rank"),
        //lk: getCoinListByKey(state, "symbol")
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins()),
        updateFilterOption: (option, filter) => dispatch(updateFilterOption(option, filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);