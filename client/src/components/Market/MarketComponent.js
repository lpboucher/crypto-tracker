import React, { Fragment } from 'react';

import OptionFilter from '../utils/filters/OptionFilter';
import CoinList from '../Tables/CoinList';
import CoinRow from '../Tables/CoinRow';

import {COINS_TO_QUERY_FOR, SORT_COINS_BY} from '../../constants/DropOptions'

const MarketComponent = ({ coins, handleOptionChange, ...filters }) => {
    const { byKey, allKeys } = coins;
    return (
        <Fragment>
            <OptionFilter
                id="coin-count-selection"
                label="coins to show"
                value={filters.coinsToShow}
                name="itemsToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
            <OptionFilter
                id="sorting-selection"
                label="sort by"
                value={filters.sortCoinsBy}
                name="sortBy"
                optionChange={handleOptionChange}
                options={SORT_COINS_BY}
            />
            <CoinList recordType='coins'>
                { allKeys.map(currentItem => (
                    <CoinRow key={byKey[currentItem].id} coin={byKey[currentItem]} />
                )) }
            </CoinList>
        </Fragment>
    );
};

export default MarketComponent;
