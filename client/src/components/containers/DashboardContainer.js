import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, fetchTransactions } from '../../actions';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OptionDropdown from '../utils/OptionDropdown';

import TabContainer from '../TabContainer';
import TabWrapper from '../presentation/TabWrapper';
import SimpleBarChart from '../charts/BarChart';
import AddTrade from '../AddTrade';

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

    render() {
        const { value, coinsToShow } = this.state;
        const { coins, transactions } = this.props;
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
                            <OptionDropdown
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
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { 
        coins: state.coins,
        transactions: state.transactions,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins()),
        fetchTransactions: () => dispatch(fetchTransactions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTabs);