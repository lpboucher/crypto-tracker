import React, { Fragment } from 'react';

import SimpleBarChart from '../charts/BarChart';
import OptionFilter from '../utils/filters/OptionFilter';
import CoinList from '../Tables/CoinList';
import PositionRow from '../Tables/PositionRow';

import { DISPLAY_CURRS } from '../../constants/DropOptions'

const PortfolioComponent = ({ positions, handleOptionChange,...filters }) => {
    const { bySymbol, allSymbols } = positions;
    return (
        <Fragment>
            {/*<SimpleBarChart data={byId}/>*/}
            <OptionFilter
                id="display-currency-selection"
                label="Display in"
                value={filters.displayIn}
                name='displayIn'
                optionChange={handleOptionChange}
                options={DISPLAY_CURRS}
            />
            <CoinList recordType='positions'>
                { allSymbols.map(symbol => (
                    <PositionRow key={symbol} position={bySymbol[symbol]} displayIn={filters.displayIn} />
                )) }
                </CoinList>
        </Fragment>
    );
};

export default PortfolioComponent;