const express = require("express");
const router1 = express.Router()
const {AddPrescription,PatientAboutPage,PatientRecords} = require('../Controllers/patient_func')

router1.get('/about',PatientAboutPage);
router1.get('/records',PatientRecords);
router1.post('/add',AddPrescription);

module.exports = router1;
