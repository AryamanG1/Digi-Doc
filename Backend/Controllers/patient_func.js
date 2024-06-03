const Patient = require('../Models/Patient')
const {UploadOnCloudinary} = require('../utils/cloudinary')
const streamifier = require('streamifier');


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
    const { email , pid , dname, rfc, find, pres, dte } = req.body;
  
    if (!dname || !rfc || !find || !pres || !dte) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }
  
    try {
      // Check if a file is included in the request
  console.log(req.body);
  console.log(req.file);
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
      }
  
      // Upload the file to Cloudinary
      const uploadResult = await UploadOnCloudinary(req.file.path);
  
      if (!uploadResult) {
        return res.status(500).json({ success: false, message: "Failed to upload image" });
      }
  
      const newPrescription = {
        doctorName: req.body.dname,
        reasonForCheckup: req.body.rfc,
        findings: req.body.find,
        prescriptions: req.body.pres,
        dateOfDoctorVisit: req.body.dte,
        uploadPicture: uploadResult.secure_url // Store the Cloudinary URL
      };
  
      req.patient.prescriptions.push(newPrescription);
      await req.patient.save();
  
      res.status(200).json({ success: true, message: "Prescription added successfully", prescription: newPrescription });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
module.exports = {AddPrescription,PatientAboutPage,PatientRecords}