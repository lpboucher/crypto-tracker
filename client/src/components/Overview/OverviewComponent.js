import React, { Fragment } from 'react';

import PositionWrapper from './PositionWrapper';
import SimpleBarChart from '../charts/BarChart';
import CoinList from '../Tables/CoinList';
import TransactionRow from '../Tables/TransactionRow';
import RemoveTrade from '../TradeForm/RemoveTrade';
import UpdateTrade from '../TradeForm/UpdateTrade';

const OverviewComponent = ({ trades }) => {
    const { tradeList, allIds, byId } = trades;
    return (
        <Fragment>
            <PositionWrapper data={tradeList}></PositionWrapper>
            <SimpleBarChart data={byId}/>
            <CoinList recordType='transactions'>
                { allIds.map((currentItem, index) => (
                    <TransactionRow index={index} key={byId[currentItem]._id} trade={byId[currentItem]} displayIn="as paid">
                        <UpdateTrade trade={byId[currentItem]}/>
                        <RemoveTrade tradeId={byId[currentItem]._id} />
                    </TransactionRow>
                )) }
            </CoinList>
        </Fragment>
    );
};

export default OverviewComponent;