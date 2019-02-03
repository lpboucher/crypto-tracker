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

import { TRANSACTION_FIELDS } from '../../constants/Fields';
import { COINS_TO_QUERY_FOR } from '../../constants/DropOptions';

class CoinTabs extends Component {
    state = {
        value: 0,
        coinsToShow: 20,
    };

    componentDidMount() {
        this.props.fetchCoins();
        this.props.fetchTransactions();
      };

    handleTabChange = (event, value) => {
        this.setState({ value });
      };

      handleCoinNumberChange = (event, value) => {
        this.setState({coinsToShow: event.target.value});
    };

    handleFieldChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { value, coinsToShow } = this.state;
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
                        <TabWrapper type={'coins'} data={coins} toShow={coinsToShow}>
                            <OptionFilter
                                id={"coin-count-selection"}
                                label={"# of coins to show"}
                                value={coinsToShow}
                                optionChange={this.handleCoinNumberChange}
                                options={COINS_TO_QUERY_FOR}
                            />
                        </TabWrapper>
                    </TabContainer>
                }
                {value === 1 &&
                    <TabContainer>
                        <TabWrapper type={'transactions'} data={transactions} ToShow={null}>
                            <SimpleBarChart data={transactions.byId}/>
                        </TabWrapper>
                    </TabContainer>}
                {value === 2 &&
                    <TabContainer>
                    <TabWrapper type={'transactions'} data={transactions} ToShow={null}/>
                </TabContainer>
                }
                <AddTrade />
                <InputDrawer 
                    onSubmit={submitTrade}
                    isOpen={isOpen}
                    handleClose={closeDrawer}
                    handleChange={this.handleFieldChange}
                    fields={TRANSACTION_FIELDS}
                    dynamicOptions={coins ? coins.allSymbols : null}
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