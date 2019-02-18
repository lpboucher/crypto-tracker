import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../ducks/trades';
import TransactionComponent from './TransactionComponent';

class TransactionContainer extends Component {
    state = {
        tradesToShow: 20,
        displayIn: 'as paid',
    };

    componentDidMount() {
        this.props.fetchTransactions();
      };

    handleOptionChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const { tradesToShow, displayIn } = this.state;
        const { transactions } = this.props;
        return (
        <TransactionComponent
            trades={transactions}
            displayIn={displayIn}
            tradesToShow={tradesToShow}
            handleOptionChange={this.handleOptionChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer);