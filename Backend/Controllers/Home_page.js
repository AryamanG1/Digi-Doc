const Patient = require('../Models/Patient');
const Doctor = require('../Models/Doctor');

const getHomepage = async (req, res) => {
    res.status(200).json({ message: "Welcome to home page" });
};

const CreatePatient = async (req, res) => {
    const { name, email, phone, dob, location, medicalHistory, bloodType } = req.body;
    try {
        const createPatientId = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const length = 8;
            let patientId = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                patientId += characters[randomIndex];
            }

            return patientId;
        };

        let patientId = createPatientId();

        const newPatient = new Patient({
            patientId: patientId,
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            location: location,
            medicalHistory: medicalHistory,
            bloodType: bloodType
        });

        // Save the new patient to the database
        await newPatient.save();

        res.status(200).json({ success: true, message: 'Patient created successfully', data: newPatient });
    } catch (error) {
        console.error('Error creating patient:', error);
        res.status(500).json({ success: false, message: 'Failed to create patient', error: error });
    }
};

const CreateDoctor = async (req, res) => {
    const { d_name, d_email, job, degree, year, college, proof_number } = req.body;

    try {
        const createDoctorId = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const length = 8;
            let doctorId = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                doctorId += characters[randomIndex];
            }

            return doctorId;
        };

        // Generate a random doctor ID
        let doctorId = createDoctorId();

        const newDoctor = new Doctor({
            d_name: req.body.d_name,
            d_email: req.body.d_email,
            job: req.body.job,
            degree: req.body.degree,
            year: req.body.year,
            college: req.body.college,
            proof_number: req.body.proof_number,
            did: doctorId
        });

        // Save the new doctor to the database
        await newDoctor.save();

        res.status(200).json({ success: true, message: 'Doctor created successfully', data: newDoctor });
    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ success: false, message: 'Failed to create doctor', error: error });
    }
};

module.exports = { CreatePatient, CreateDoctor, getHomepage };

