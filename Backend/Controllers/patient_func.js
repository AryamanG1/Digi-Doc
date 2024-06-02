const Patient = require('../Models/Patient')


const PatientAboutPage = async(req,res) => {
    res.status(200).json({DOB:req.patient.dob,email:req.patient.email,phone:req.patient.phone,locate:req.patient.location})
}

const PatientRecords = async(req,res) => {
    res.status(200).json({DOB:req.patient.dob,
                         email:req.patient.email,
                         phone:req.patient.phone,
                         locate:req.patient.location,
                         medical_history:req.patient.medicalHistory,
                         prescriptions:req.patient.prescriptions,
                        })
}

const AddPrescription = async(req,res) => {
    const {dname,rfc,find,pres,dte,upld} = req.body

    if(!dname || !rfc || !find || !pres || !dte || !upld){
        return res.status(400).json({ success: false, message: "Required fields are missing" })
    }

    const newPrescription = {
            doctorName:dname,
            reasonForCheckup:rfc,
            findings:find,
            prescriptions:pres,
            dateOfDoctorVisit:dte,
            uploadPicture:upld    
    }

    req.patient.prescriptions.push(newPrescription)

    await req.patient.save();

    res.status(200).json({ success: true, message: "Prescription added successfully", prescription: newPrescription });
}

module.exports = {AddPrescription,PatientAboutPage,PatientRecords}