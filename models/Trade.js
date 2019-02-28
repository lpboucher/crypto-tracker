const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradeSchema = new Schema({
    date: { type: Date, default: Date.now },
    symbol: String,
    coinName: String,
    type: String,
    paid_in: String,
    price_paid: Number,
    prices: {
            USD: Number,
            BTC: Number,
        },
    quantity: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

tradeSchema.set('toObject', { getters: true });
tradeSchema.set('toJSON', { virtuals: true });

tradeSchema.virtual('total_cost').get(function () {
    return {
        USD: this.prices.USD * this.quantity,
        BTC: this.prices.BTC * this.quantity,
    }
  });

mongoose.model('trades', tradeSchema);