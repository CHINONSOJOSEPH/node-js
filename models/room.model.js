const mongoose = require('mongoose');
const roomTypeModel = require('./roomtype.model')


const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
    , roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoomType"
    }
})


module.exports = mongoose.model('Room', roomSchema)