const express = require('express');
const dotenv = require('dotenv');
const errorHandlermiddleware = require('../Backend/Middleware/error-handler')
const notfoundmiddleware = require('../Backend/Middleware/not-found')
dotenv.config();


const app = express()

const patient_router = require('../Backend/Routers/patient_routes');


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/home/profile',patient_router);

app.use(notfoundmiddleware)
app.use(errorHandlermiddleware)

app.listen(process.env.PORT,(req,res) => {
    console.log("Succesfully listening on port 500");
})