const roomTypeModel = require('../models/roomtype.model');

class RoomTypeService {
    // create 
    async create(roomType) {
        return await roomTypeModel.create(roomType)
    }


    // get one roomtype 
    async getOne(filter) {
        return await roomTypeModel.findOne(filter)
    }


    // get all roomtype s
    async getMany(filter) {
        return await roomTypeModel.find(filter)
    }


    // update a room type
    async update(filter, newData) {
        return await roomTypeModel.findOneAndUpdate(filter, newData, { new: true })
    }


    // delete a room type
    async delete (filter){
        return await roomTypeModel.findOneAndDelete (filter);
    }


}

module.exports = new RoomTypeService()