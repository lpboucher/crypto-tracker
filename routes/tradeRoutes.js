const mongoose = require('mongoose');

const Trade = mongoose.model('trades');

module.exports = (app) => {
    app.post('/api/trade', async (req, res) => {
        const { symbol, coinName, type } = req.body;
        console.log(req.user);

        const newTrade = new Trade({
            symbol: symbol,
            coinName: coinName,
            type: type,
            _user: req.user.id,
        });

        try {
            await newTrade.save();
        } catch(err) {
            console.log(err);
        }
    })
}