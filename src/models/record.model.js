const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordModel = new mongoose.Schema({
    bookId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    operation: {
        type: Number,
        required: true,
        enum: [1, 2]
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Record', recordModel, 'records');