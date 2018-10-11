import React from 'react';

const CoinList = ({coins}) => {
    return (
        <div>
            { coins.map(currentCoin => (
                <div key={currentCoin.id}>{currentCoin.name}</div>
            )) }
        </div>
    );
};

export default CoinList;