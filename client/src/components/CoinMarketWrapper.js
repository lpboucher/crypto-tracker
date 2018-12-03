import React, { Component, Fragment } from 'react';
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
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.coinsToShow !== prevState.coinsToShow) {
            this.props.fetchCoins(this.state.coinsToShow);
          }
      };

    handleCoinNumberChange = (event, value) => {
        this.setState({coinsToShow: event.target.value});
    };

    render() {
        const { coinsToShow } = this.state;
        return (
            <Fragment>
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
                            <CoinList recordType={"coins"} coins={this.props.coins.data} />
                        ) : (
                            // think about changing this div to a more user-friendly interaction
                            <div>Loading...</div>
                        )}
            </Fragment>
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