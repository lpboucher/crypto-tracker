import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

import CoinList from './CoinList';

class CoinWrapper extends Component {
    componentDidMount() {
        this.props.fetchCoins();
      }

    render() {
        return (
            <div>
                {this.props.coins ? (
                        <CoinList coins={this.props.coins.data} />
                    ) : (
                        <div>Loading...</div>
                    )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: state.coins
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinWrapper);