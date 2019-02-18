import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../ducks/trades';
import OverviewComponent from './OverviewComponent';

class OverviewContainer extends Component {
    componentDidMount() {
        this.props.fetchTransactions();
      };

    render() {
        const { trades } = this.props;
        return (
        <OverviewComponent
            trades={trades}
        />
        );
    }
}

function mapStateToProps(state) {
    return { 
        transactions: state.transactions,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);