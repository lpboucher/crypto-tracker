import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';

import SimpleBarChart from './charts/BarChart';
import CoinList from './CoinList';

class CoinDashboardWrapper extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        return (
            <Fragment>
                {this.props.transactions ? (
                            <Fragment>
                                <SimpleBarChart data={this.props.transactions } />
                                <CoinList recordType={"transactions"} coins={this.props.transactions} />
                            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinDashboardWrapper);