const mongoose = require('mongoose');

const Trade = mongoose.model('trades');

module.exports = (app) => {
    app.post('/api/trade/new', async (req, res) => {
        const { symbol, coinName, type, price_amount, quantity, price_currency } = req.body;

        const newTrade = new Trade({
            symbol: symbol,
            coinName: coinName,
            type: type,
            price: {
                amount: price_amount,
                currency: price_currency
            },
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

        await Trade.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, update) => {
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