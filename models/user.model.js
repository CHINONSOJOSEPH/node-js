const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
password : {
    type: String,
    required: true,
},
role: {
    type: String,
    enum: [ 'guest', 'admin'],
    default: 'guest'
}
})

module.export = mongoose.model('User',userSchema)