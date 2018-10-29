const Trade = mongoose.model('trades');

module.exports = (app) => {
    app.post('/api/trade', async (req, res) => {
        const { symbol, coinName, type } = req.body;

        const trade = new Trade({
            symbol: String,
            coinName: String,
            type: String,
            _user: { type: Schema.Types.ObjectId, ref: 'User'},
        });

        try {
            await trade.save();
        } catch(err) {
            console.log(err);
        }
    })
}