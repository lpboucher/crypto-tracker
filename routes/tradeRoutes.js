const mongoose = require('mongoose');

const Trade = mongoose.model('trades');

module.exports = (app) => {
    app.post('/api/trade/new', async (req, res) => {
        const { date, symbol, coinName, type, quantity, price_currency, tradePrices } = req.body;

        const newTrade = new Trade({
            date: date,
            symbol: symbol,
            coinName: coinName,
            type: type,
            paid_in: price_currency,
            prices: tradePrices,
            quantity: quantity,
            _user: req.user.id,
        });

        try {
            await newTrade.save();
            res.json(newTrade);
        } catch(err) {
            
        }
    })

    app.put('/api/trade/update/:id', async (req, res) => {
        const { date, symbol, coinName, type, quantity, price_currency, tradePrices } = req.body;

        const updateData = {
            date: date,
            symbol: symbol,
            coinName: coinName,
            type: type,
            paid_in: price_currency,
            prices: tradePrices,
            quantity: quantity,
        };

        await Trade.findByIdAndUpdate(req.params.id, {$set: updateData}, {new: true}, (err, update) => {
            if(err) {
                console.log(err);
                return res.sendStatus(501);
            } else {
                res.json(update);
            }
        })
    })

    app.get('/api/trades', async(req, res) => {
        try {
            const trades = await Trade.find({ "_user": req.user._id });
            res.json(trades);
        } catch(err) {
            console.log(err);
        }
    })

    app.delete('/api/trade/delete/:id', async(req, res) => {
        Trade.findByIdAndRemove(req.params.id, (err, trade) => {
            if(err) {
              return res.sendStatus(500);
            } else {
              return res.sendStatus(200);
            }
        })
    })
}