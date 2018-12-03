const mongoose = require('mongoose');

const Trade = mongoose.model('trades');

module.exports = (app) => {
    app.post('/api/trade', async (req, res) => {
        const { symbol, coinName, type, price, quantity } = req.body;
        console.log(req.user);

        const newTrade = new Trade({
            symbol: symbol,
            coinName: coinName,
            type: type,
            price: price,
            quantity: quantity,
            _user: req.user.id,
        });

        try {
            await newTrade.save();
            res.sendStatus(201);
        } catch(err) {
            console.log(err);
        }
    })

    app.get('/api/trades', async(req, res) => {
        try {
            const trades = await Trade.find({ "_user": req.user._id });
            res.json(trades);
        } catch(err) {
            console.log(err);
        }
    })
}