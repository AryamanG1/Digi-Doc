const Patient = require('../Models/Patient');
const connectDB = require('../Database/conn')

const pAuth = async (req, res, next) => {
    const { Email, pid } = req.body;
    let conn = await connectDB();
    

    // Find the patient based on provided email and patient ID
    const patient = await Patient.findOne({ email: Email, patientId: pid });

    // If patient not found or credentials don't match, return unauthorized
    if (!patient) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // If patient is found, attach patient details to request object and proceed
    req.patient = patient;
    next();
};

module.exports = pAuth;
