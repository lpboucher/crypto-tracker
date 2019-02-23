import React, {Fragment} from 'react';

import OptionFilter from '../utils/filters/OptionFilter';
import CoinList from '../Tables/CoinList';
import TransactionRow from '../Tables/TransactionRow';
import RemoveTrade from '../TradeForm/RemoveTrade';
import UpdateTrade from '../TradeForm/UpdateTrade';

import { DISPLAY_CURRS, COINS_TO_QUERY_FOR} from '../../constants/DropOptions'

const TransactionComponent = ({ trades, tradesToShow, displayIn, handleOptionChange }) => {
    const { byId, allIds } = trades;
    return (
        <Fragment>
            <OptionFilter
                id="count-selection"
                label="trades to show"
                value={tradesToShow}
                name="itemsToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
            <OptionFilter
                id="display-currency-selection"
                label="Display in"
                value={displayIn}
                name='displayIn'
                optionChange={handleOptionChange}
                options={DISPLAY_CURRS}
            />
            <CoinList recordType='transactions'>
                { allIds.slice(0, tradesToShow).map(currentItem => (
                    <TransactionRow key={byId[currentItem]._id} trade={byId[currentItem]} displayIn={displayIn}>
                        <UpdateTrade trade={byId[currentItem]}/>
                        <RemoveTrade tradeId={byId[currentItem]._id} />
                    </TransactionRow>
                )) }
            </CoinList>
        </Fragment>
    );
};

export default TransactionComponent;