const roomModel = require('../model/room.model');


class RoomService {

    async create(roomData) {
        return await roomModel.create(roomData);
    }

    async getOne(filter) {
        return await roomModel.findOne(filter).populate('roomType')
    }

    async getAll(filter) {
        return await roomModel.find(filter).populate('roomType')
    }

    async update(filter, updateData) {
        return await roomModel.findOneAndUpdate(filter, updateData, { new: true });
    }

    async delete(filter){
        return await roomModel.findOneAndDelete(filter)
    }
}

module.exports = new RoomService()