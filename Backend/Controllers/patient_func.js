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

const AddPrescription = async (req, res) => {
    const { email , pid , dname, rfc, find, pres, dte , url} = req.body;
  
    if (!dname || !rfc || !find || !pres || !dte || !url) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }
  
    try {
      const newPrescription = {
        doctorName: req.body.dname,
        reasonForCheckup: req.body.rfc,
        findings: req.body.find,
        prescription: req.body.pres,
        dateOfDoctorVisit: req.body.dte,
        uploadPicture: req.body.url 
      };
  
      req.patient.prescriptions.push(newPrescription);
      await req.patient.save();
  
      res.status(200).json({ success: true, message: "Prescription added successfully", prescription: newPrescription });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
module.exports = {AddPrescription,PatientAboutPage,PatientRecords}
