import React from 'react';

import TabWrapper from '../Dashboard/TabWrapper';
import OptionFilter from '../utils/filters/OptionFilter';

import { DISPLAY_CURRS, COINS_TO_QUERY_FOR} from '../../constants/DropOptions'

const TransactionComponent = ({ trades, tradesToShow, displayIn, handleOptionChange }) => {
    return (
        <TabWrapper type={'transactions'} data={trades} ToShow={tradesToShow} displayIn={displayIn}>
        <OptionFilter
                id="display-currency-selection"
                label="Display in"
                value={displayIn}
                name='displayIn'
                optionChange={handleOptionChange}
                options={DISPLAY_CURRS}
            />
            <OptionFilter
                id="count-selection"
                label="trades to show"
                value={tradesToShow}
                name="tradesToShow"
                optionChange={handleOptionChange}
                options={COINS_TO_QUERY_FOR}
            />
        </TabWrapper>
    );
};

export default TransactionComponent;