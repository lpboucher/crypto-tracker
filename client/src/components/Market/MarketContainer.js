import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, getCoinsByKey, getCoinListByKey } from '../../ducks/coins';
import { updateNumberItems } from '../../ducks/filters';
import MarketComponent from './MarketComponent';
import withLoading from '../utils/hocs/withLoading';

const LoadingMarket = withLoading(MarketComponent);

class MarketContainer extends Component {

    componentDidMount() {
        this.props.fetchCoins();
      };

    render() {
        const { coins, itemsToShow, updateNumberItems } = this.props;
        return (
        <LoadingMarket
            coinsToShow={itemsToShow}
            coins={coins}
            handleOptionChange={updateNumberItems}
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
        updateNumberItems: (items) => dispatch(updateNumberItems(items))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);