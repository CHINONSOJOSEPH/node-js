require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const roomTypeRoute = require('./routes/roomType.routes')

mongoose.connect(process.env.URI)
.then(() => {
    console.log('Database connected successfully')
})
.catch(error => {
    console.error(error)
})







app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/v1/roomtype', roomTypeRoute)

// const database =[{room: 100, roomType:"small"}]



/*app.post('/', function (req, res) {
   // body query param 
   console.log(req.body)
   database.push(req.body)
   res.status(201).send({success: true , data: req.body})
})


app.get('/', function (req, res){
    res.send({data: database})
})

*/

app.listen(3000, () => console.log('Server started on port 3000'))
