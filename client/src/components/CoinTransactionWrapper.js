import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';

import CoinList from './CoinList';

class CoinTransactionWrapper extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        return (
            <Fragment>
                    {this.props.transactions ? (
                            <CoinList recordType={"transactions"} coins={this.props.transactions} />
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
        transactions: state.transactions
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTransactionWrapper);