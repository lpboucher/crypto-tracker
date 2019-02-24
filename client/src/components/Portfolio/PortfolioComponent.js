import React, { Fragment } from 'react';

import PositionWrapper from './PositionWrapper';
import SimpleBarChart from '../charts/BarChart';
import CoinList from '../Tables/CoinList';
import TransactionRow from '../Tables/TransactionRow';
import RemoveTrade from '../TradeForm/RemoveTrade';
import UpdateTrade from '../TradeForm/UpdateTrade';

const PortfolioComponent = ({ trades, positions }) => {
    const { allIds, byId } = trades;
    return (
        <Fragment>
            <PositionWrapper positions={positions}></PositionWrapper>
            <SimpleBarChart data={byId}/>
            <CoinList recordType='positions'>
                { allIds.map(currentItem => (
                    <TransactionRow key={byId[currentItem]._id} trade={byId[currentItem]} displayIn="as paid">
                        <UpdateTrade trade={byId[currentItem]}/>
                        <RemoveTrade tradeId={byId[currentItem]._id} />
                    </TransactionRow>
                )) }
            </CoinList>
        </Fragment>
    );
};

export default PortfolioComponent;