const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    tradeId:       {type: Schema.Types.ObjectId, ref: 'items'},
    otherItemId:  {type: Schema.Types.ObjectId, ref: 'items'},
    tradersId:    {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Offer', offerSchema);


