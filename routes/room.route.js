const roomController = require('../controllers/room.controller');

const express = require('express');
const router = express.Router()


router.get('/', roomController.getAllRoom)