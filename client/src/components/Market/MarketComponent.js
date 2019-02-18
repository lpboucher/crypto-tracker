import React from 'react';

import TabWrapper from '../Dashboard/TabWrapper';
import OptionFilter from '../utils/filters/OptionFilter';

import {COINS_TO_QUERY_FOR} from '../../constants/DropOptions'

const MarketComponent = ({ coins, coinsToShow, handleOptionChange }) => {
    return (
        <TabWrapper type={'coins'} data={coins} toShow={coinsToShow}>
            <OptionFilter
                id="coin-count-selection"
                label="coins to show"
                value={coinsToShow}
                name="coinsToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
        </TabWrapper>
    );
};

export default MarketComponent;