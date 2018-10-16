import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CoinMarketWrapper from './CoinMarketWrapper';
import TabContainer from './TabContainer';

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
            <div>
                <Tabs value={value} onChange={this.handleTabChange}>
                    <Tab label="Market Data" />
                    <Tab label="Portfolio" />
                    <Tab label="Transactions" />
                </Tabs>
                {value === 0 && <TabContainer><CoinMarketWrapper /></TabContainer>}
                {value === 1 && <TabContainer>Portfolio</TabContainer>}
                {value === 2 && <TabContainer>Transactions</TabContainer>}
            </div>
        );
    }
}

export default CoinTabs;