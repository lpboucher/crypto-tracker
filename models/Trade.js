const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradeSchema = new Schema({
    symbol: String,
    coinName: String,
    type: String,
    price: Number,
    quantity: Number,
    totalCost: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('trades', tradeSchema);