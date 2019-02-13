import React, { Fragment } from 'react';

import CoinList from './CoinList';

import CircularProgress from '@material-ui/core/CircularProgress';

const TabWrapper = ({data, type, children, ...filters}) => {
    return (
        <Fragment>
            {data ? (
                    <Fragment>
                        {children}
                        <CoinList 
                            recordType={type}
                            item={type === "transactions" ? data.byId : data.byRank}
                            list={type === "transactions" ? data.allIds : data.allRanks}
                            {...filters} />
                    </Fragment>
                ) : (
                    // think about changing this div to a more user-friendly interaction
                    <CircularProgress />
                )}
        </Fragment>
    );
};

export default TabWrapper;