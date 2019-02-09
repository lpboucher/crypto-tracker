const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradeSchema = new Schema({
    symbol: String,
    coinName: String,
    type: String,
    paid_in: String,
    prices: [{
            currency: {
                type: String,
                enum: ['USD', 'ETH', 'BTC']
            },
            amount: Number,
        }],
    quantity: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

tradeSchema.set('toObject', { virtuals: true });
tradeSchema.set('toJSON', { virtuals: true });

tradeSchema.virtual('totalCost').get(function () {
    return this.price * this.quantity;
  });

mongoose.model('trades', tradeSchema);