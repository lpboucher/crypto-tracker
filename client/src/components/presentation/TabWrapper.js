import React, { Fragment } from 'react';

import CoinList from '../CoinList';

const TabWrapper = ({data, type, toShow, children}) => {
    return (
        <Fragment>
            {data ? (
                    <Fragment>
                        {children}
                        <CoinList recordType={type} item={data.bySymbol} list={data.allSymbols} numberOfItems={toShow}/>
                    </Fragment>
                ) : (
                    // think about changing this div to a more user-friendly interaction
                    <div>Loading...</div>
                )}
        </Fragment>
    );
};

export default TabWrapper;