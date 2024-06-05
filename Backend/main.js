const express = require('express');
const dotenv = require('dotenv');
const errorHandlermiddleware = require('../Backend/Middleware/error-handler')
const notfoundmiddleware = require('../Backend/Middleware/not-found')
dotenv.config();


const app = express()

const patient_router = require('../Backend/Routers/patient_routes');
const doctor_router = require('../Backend/Routers/doctor_routes');
const home_router = require('../Backend/Routers/home_routes');


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/patient',patient_router);
app.use('/doctor',doctor_router);
app.use('/home',home_router);

app.use(notfoundmiddleware)
app.use(errorHandlermiddleware)

app.listen(process.env.PORT,(req,res) => {
    console.log("Succesfully listening on port 500");
})