import React from 'react';

import TabWrapper from '../Dashboard/TabWrapper';
import PositionWrapper from '../presentation/PositionWrapper';
import SimpleBarChart from '../charts/BarChart';

const OverviewComponent = ({ trades }) => {
    return (
        <TabWrapper type={'transactions'} data={trades} ToShow={null}>
            <PositionWrapper data={trades.tradeList}></PositionWrapper>
            <SimpleBarChart data={trades.byId}/>
        </TabWrapper>
    );
};

export default OverviewComponent;