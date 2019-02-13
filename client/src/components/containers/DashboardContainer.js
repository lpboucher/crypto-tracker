import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '../../ducks/views';
import { fetchCoins } from '../../ducks/coins';
import { submitTrade, fetchTransactions } from '../../ducks/trades';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OptionFilter from '../utils/OptionFilter';

import InputDrawer from '../utils/InputDrawer';
import TabContainer from '../utils/TabContainer';
import TabWrapper from '../presentation/TabWrapper';
import SimpleBarChart from '../charts/BarChart';
import AddTrade from '../containers/AddTrade';
import PositionWrapper from '../presentation/PositionWrapper';

import { COINS_TO_QUERY_FOR, DISPLAY_CURRS } from '../../constants/DropOptions';

class CoinTabs extends Component {
    state = {
        value: 0,
        numberToShow: 20,
        displayCurr: 'as paid',
    };

    componentDidMount() {
        this.props.fetchCoins();
        this.props.fetchTransactions();
      };

    handleTabChange = (event, value) => {
        this.setState({ value });
      };

    handleOptionChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const { value, numberToShow, displayCurr } = this.state;
        const { coins, transactions, isOpen, submitTrade, closeDrawer } = this.props;
        return (
            <Fragment>
                <Tabs value={value} onChange={this.handleTabChange}>
                    <Tab label="Market Data" />
                    <Tab label="Dashboard" />
                    <Tab label="Transactions" />
                </Tabs>
                {value === 0 && 
                    <TabContainer>
                        <TabWrapper type={'coins'} data={coins} toShow={numberToShow}>
                            <OptionFilter
                                id="coin-count-selection"
                                label="coins to show"
                                value={numberToShow}
                                name="numberToShow"
                                optionChange={this.handleOptionChange}
                                options={COINS_TO_QUERY_FOR}
                            />
                        </TabWrapper>
                    </TabContainer>
                }
                {value === 1 &&
                    <TabContainer>
                        <TabWrapper type={'transactions'} data={transactions} ToShow={null}>
                            <PositionWrapper data={transactions.tradeList}></PositionWrapper>
                            <SimpleBarChart data={transactions.byId}/>
                        </TabWrapper>
                    </TabContainer>}
                {value === 2 &&
                    <TabContainer>
                        <TabWrapper type={'transactions'} data={transactions} ToShow={numberToShow} displayIn={displayCurr}>
                        <OptionFilter
                                id="display-currency-selection"
                                label="Display in"
                                value={displayCurr}
                                name='displayCurr'
                                optionChange={this.handleOptionChange}
                                options={DISPLAY_CURRS}
                            />
                            <OptionFilter
                                id="count-selection"
                                label="trades to show"
                                value={numberToShow}
                                name="numberToShow"
                                optionChange={this.handleOptionChange}
                                options={COINS_TO_QUERY_FOR}
                            />
                        </TabWrapper>
                    </TabContainer>
                }
                <AddTrade />
                <InputDrawer 
                    onSubmit={submitTrade}
                    isOpen={isOpen}
                    handleClose={closeDrawer}
                    coinSymbols={coins ? coins.allSymbols : null}
                    coinNames={coins ? coins.bySymbol : null}
                    initialValues={transactions.activeTradeValues}
                    />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
        transactions: state.transactions,
        isOpen: state.views.isDrawerOpen,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        submitTrade: (trade) => dispatch(submitTrade(trade)),
        fetchCoins: () => dispatch(fetchCoins()),
        fetchTransactions: () => dispatch(fetchTransactions()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTabs);