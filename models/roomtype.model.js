const mongoose = require('mongoose')

const roomTypeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
        unique: true
    }

});


const RoomType = mongoose.model('RoomType', roomTypeSchema);

module.exports = RoomType