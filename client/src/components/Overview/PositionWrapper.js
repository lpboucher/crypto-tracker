import React, { Fragment } from 'react';
import _ from 'lodash';
import CoinList from '../Tables/CoinList';

const PositionWrapper = ({data}) => {
    var positions = _(data)
                        .groupBy('symbol')
                        .map((objs, key) => ({
                            'symbol': key,
                            'total_quantity': _.sumBy(objs, 'quantity') }))
                        .value();
    return (
        <Fragment>
            {/*<CoinList 
                recordType={type}
                item={type === "transactions" ? data.byId : data.bySymbol}
                list={type === "transactions" ? data.allIds : data.allSymbols}
                numberOfItems={toShow}/>
            */}
            <div>
                {positions.map(position => {
                    return <p>{`${position.symbol}:${position.total_quantity}`}</p>
                })}
            </div>
        </Fragment>
    );
};

export default PositionWrapper;