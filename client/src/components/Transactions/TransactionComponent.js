import React, {Fragment} from 'react';

import OptionFilter from '../utils/filters/OptionFilter';
import CoinList from '../Tables/CoinList';
import TransactionRow from '../Tables/TransactionRow';
import RemoveTrade from '../TradeForm/RemoveTrade';
import UpdateTrade from '../TradeForm/UpdateTrade';

import { DISPLAY_CURRS, COINS_TO_QUERY_FOR, SORT_TRADES_BY} from '../../constants/DropOptions'

const TransactionComponent = ({ trades, handleOptionChange, ...filters }) => {
    const { byId, allIds } = trades;
    return (
        <Fragment>
            <OptionFilter
                id="count-selection"
                label="trades to show"
                value={filters.tradesToShow}
                name="itemsToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
            <OptionFilter
                id="display-currency-selection"
                label="Display in"
                value={filters.displayIn}
                name='displayIn'
                optionChange={handleOptionChange}
                options={DISPLAY_CURRS}
            />
            <OptionFilter
                id="sorting-selection"
                label="sort by"
                value={filters.sortTradesBy}
                name="sortTrades"
                optionChange={handleOptionChange}
                options={SORT_TRADES_BY}
            />
            <CoinList recordType='transactions'>
                { allIds.map(currentItem => (
                    <TransactionRow key={byId[currentItem]._id} trade={byId[currentItem]} displayIn={filters.displayIn}>
                        <UpdateTrade trade={byId[currentItem]}/>
                        <RemoveTrade tradeId={byId[currentItem]._id} />
                    </TransactionRow>
                )) }
            </CoinList>
        </Fragment>
    );
};

export default TransactionComponent;