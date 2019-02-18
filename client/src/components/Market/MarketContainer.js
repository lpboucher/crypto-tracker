import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../../ducks/coins';
import MarketComponent from './MarketComponent';

class MarketContainer extends Component {
    state = {
        coinsToShow: 20,
    };

    componentDidMount() {
        this.props.fetchCoins();
      };

    handleOptionChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const { coinsToShow } = this.state;
        const { coins } = this.props;
        return (
        <MarketComponent
            coinsToShow={coinsToShow}
            coins={coins}
            handleOptionChange={this.handleOptionChange}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);