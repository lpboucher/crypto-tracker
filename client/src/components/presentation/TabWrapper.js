import React, { Fragment } from 'react';

import CoinList from './CoinList';

import CircularProgress from '@material-ui/core/CircularProgress';

const TabWrapper = ({data, type, toShow, children}) => {
    return (
        <Fragment>
            {data ? (
                    <Fragment>
                        {children}
                        <CoinList 
                            recordType={type}
                            item={type === "transactions" ? data.byId : data.bySymbol}
                            list={type === "transactions" ? data.allIds : data.allSymbols}
                            numberOfItems={toShow}/>
                    </Fragment>
                ) : (
                    // think about changing this div to a more user-friendly interaction
                    <CircularProgress />
                )}
        </Fragment>
    );
};

export default TabWrapper;