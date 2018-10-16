import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

import TextField from '@material-ui/core/TextField';

import CoinList from './CoinList';

const numberOptions = [10,20,50,100];

class CoinMarketWrapper extends Component {
    state = {
        coinsToShow: 20,
    };

    componentDidMount() {
        this.props.fetchCoins(this.state.coinsToShow);
      };
    
    componentDidUpdate() {
        this.props.fetchCoins(this.state.coinsToShow);
      };

    handleCoinNumberChange = (event, value) => {
        this.setState({coinsToShow: event.target.value});
    };

    render() {
        const { coinsToShow } = this.state;
        return (
            <div>
                <TextField
                        id="coin-count-selection"
                        select
                        label="# of coins to show"
                        value={coinsToShow}
                        onChange={this.handleCoinNumberChange}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            width: 250,
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                        >
                        {numberOptions.map(option => (
                            <option key={option} value={option}>
                            {option}
                            </option>
                        ))}
                    </TextField>
                    
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
        fetchCoins: (count) => dispatch(fetchCoins(count))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinMarketWrapper);