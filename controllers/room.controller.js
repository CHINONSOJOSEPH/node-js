const roomService = require('../service/room.service');



class RoomController {

    async createRoom(req, res) {
        // check if room has been created b4
        const existingRoom = await roomService.getOne({ roomId: req.body.roomId });
        if (!existingRoom) {

            return res
                .status(403)
                .json({ success: false, message: "room already exists" })
        }


        const createdRoom = await roomService.create(req.body);
        res.status(201).json({ success: true, message: "room created successfully ", data: createdRoom })
    }

    async getOneRoom(req, res) {
        const foundRoom = await roomService.getOne({ roomId: req.body.roomId })


        if (!foundRoom) {

            return res
                .status(400)
                .json({ success: false, message: "room does not exists" })
        }


        res.status(200).json({ success: true, message: "room fetched successfully ", data: foundRoom })
    }


     async getAllRoom(req, res) {
        const foundRooms = await roomService.getAll({ roomId: req.body.roomId })


        if (!foundRooms) {

            return res
                .status(400)
                .json({ success: false, message: "room does not exists" })
        }


        res.status(200).json({ success: true, message: "room fetched successfully ", data: foundRooms })
    }

    async deleteRoomType(req, res){
        const deletedRoom = await roomService.delete({ roomId: req.body.roomId });
        if (!deletedRoom) {

            return res
                .status(404)
                .json({ success: false, message: "room not exists" })
        }

        res.status(200).json({success: true, message:"room delted", data: deletedRoom})
    }


}

module.exports = new RoomController()