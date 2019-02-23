import React, { Fragment } from 'react';

import OptionFilter from '../utils/filters/OptionFilter';
import CoinList from '../Tables/CoinList';
import CoinRow from '../Tables/CoinRow';

import {COINS_TO_QUERY_FOR} from '../../constants/DropOptions'

const MarketComponent = ({ coins, coinsToShow, handleOptionChange }) => {
    const { byRank, allRanks } = coins;
    return (
        <Fragment>
            <OptionFilter
                id="coin-count-selection"
                label="coins to show"
                value={coinsToShow}
                name="itemsToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
            <CoinList recordType='coins'>
                { allRanks.slice(0, coinsToShow).map(currentItem => (
                    <CoinRow key={byRank[currentItem].id} coin={byRank[currentItem]} />
                )) }
            </CoinList>
        </Fragment>
    );
};

export default MarketComponent;
