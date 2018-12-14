const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradeSchema = new Schema({
    symbol: String,
    coinName: String,
    type: String,
    price: {
        amount: Number,
        currency: {
            type: String,
            enum: ['EUR', 'USD', 'ETH', 'BTC']
        }
    },
    /* {
        EUR: {
            type: Number
        },
        USD: {
            type: Number
        },
        ETH: {
            type: Number
        },
        BTC: {
            type: Number
        }
    }, */
    quantity: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

tradeSchema.set('toObject', { virtuals: true });
tradeSchema.set('toJSON', { virtuals: true });

tradeSchema.virtual('totalCost').get(function () {
    return this.price * this.quantity;
  });

mongoose.model('trades', tradeSchema);