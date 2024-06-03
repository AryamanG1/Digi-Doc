const express = require("express");
const upload = require('../Middleware/multer')
const pAuth = require('../Middleware/login_patient')

const router1 = express.Router()
const {AddPrescription,PatientAboutPage,PatientRecords} = require('../Controllers/patient_func')

router1.get('/about',pAuth,PatientAboutPage);
router1.get('/records',pAuth,PatientRecords);
router1.post('/add',pAuth,upload.single('image'),AddPrescription);

module.exports = router1;
