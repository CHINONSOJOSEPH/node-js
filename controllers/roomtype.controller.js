const roomTypeService = require('../services/roomtype.services');



class RoomTypeController {
    // create a room type
    async createRoom(req, res) {
        // check if a roomtype with that name exist already
        const newRoomTypeData = req.body; // {}
        const foundRoomType = await roomTypeService.getOne({ roomType: newRoomTypeData.roomType });

        if (foundRoomType) {
            res.status(400).json({ success: false, message: "Roomtype already exists" });
        }

        const newRoomType = await roomTypeService.create(newRoomTypeData);
        res.status(201).json({ success: true, message: "Roomtype fetched Succesfully" });
    }




    // get one roomtype
    async getOneRoomType(req, res) {
        const requestedRoomType = req.params.roomType;

        const foundRoomType = await roomTypeService.getOne({ roomType: requestedRoomType.roomType });
        if (!foundRoomType) {
            res.status(404).json({ success: false, message: "Roomtype does not exist" })
        }

        res.status(200).json({ success: true, message: "RoomType fetched successfully", data: foundRoomType })


    }



    // get all room types
    async getAllRoomTypes(req, res) {
        const filter = req.query;

        const foundRoomTypes  =await roomTypeService.getMany(filter);

        if (!foundRoomTypes) {
            res.status(404).json({ success: false, message: "No roomTypes found" })
        }

        res.status(200).json({ success: true, message: "RoomTypes fetched successfully", data: foundRoomTypes })
    }



    // delete a roomtype
    async deleteRoomType (req, res){
        const requestedRoomType = req.params.roomType;

        const deletedRoomType = await  roomTypeService.delete({roomType: requestedRoomType});


        if (!deletedRoomType) {
            res.status(404).json({ success: false, message: "Requested roomtype not found" })
        }

        res.status(200).json({ success: true, message: "RoomTypes deleted successfully", data: deletedRoomType })
    }


    // update a room type
    async updateRoomType (req, res){
    
    }
}

module.exports = new RoomTypeController()