import React, { Fragment } from 'react';

import AddTrade from '../TradeForm/AddTrade';
import InputContainer from '../TradeForm/InputContainer';
import MarketContainer from '../Market/MarketContainer';
import OverviewContainer from '../Overview/OverviewContainer';
import TransactionContainer from '../Transactions/TransactionContainer';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const DashboardComponent = ({ activeTab, handleTabChange }) => {
    return (
        <Fragment>
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Market Data" />
                <Tab label="Overview" />
                <Tab label="Transactions" />
            </Tabs>
            {activeTab === 0 && <MarketContainer />}
            {activeTab === 1 && <OverviewContainer />}
            {activeTab === 2 && <TransactionContainer />}
            <AddTrade />
            <InputContainer />
        </Fragment>
    );
};

export default DashboardComponent;