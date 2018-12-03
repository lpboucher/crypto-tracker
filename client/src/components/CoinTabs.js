import React, { Component, Fragment } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CoinMarketWrapper from './CoinMarketWrapper';
import CoinTransactionWrapper from './CoinTransactionWrapper';
import TabContainer from './TabContainer';
import AddTrade from './AddTrade';

class CoinTabs extends Component {
    state = {
        value: 0,
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
      };

    render() {
        const { value } = this.state;
        return (
            <Fragment>
                <Tabs value={value} onChange={this.handleTabChange}>
                    <Tab label="Market Data" />
                    <Tab label="Dashboard" />
                    <Tab label="Transactions" />
                </Tabs>
                {value === 0 && <TabContainer><CoinMarketWrapper /></TabContainer>}
                {value === 1 && <TabContainer>Dashboard</TabContainer>}
                {value === 2 && <TabContainer><CoinTransactionWrapper /></TabContainer>}
                <AddTrade />
            </Fragment>
        );
    }
}

export default CoinTabs;