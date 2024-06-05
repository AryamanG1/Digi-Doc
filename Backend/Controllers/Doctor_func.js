const Patient = require('../Models/Patient')


const DoctorHomePage = async(req,res) => {
    res.status(200).json({dname:req.doctor.d_name,
                          demail:req.doctor.d_email,
                          post:req.doctor.job
                        })
}

const ViewPatient = async(req,res) => {
    const {pid} = req.body;
    
    try {
        const patient = await Patient.findOne({patientId:req.body.pid})
        if(!patient){
            console.log("invalid patient id entered");
            return res.status(401).json({success: true , data : []})
        }
        

        res.status(200).json({p_name:patient.name,
                              p_dob:patient.dob,
                              p_phone:patient.phone,
                              bloodtype:patient.bloodType,
                              medicalhistory:patient.medicalHistory,
                              last_doctor:patient.prescriptions[patient.prescriptions.length-1].doctorName,
                              last_findings:patient.prescriptions[patient.prescriptions.length-1].findings,
                              last_findings:patient.prescriptions[patient.prescriptions.length-1].prescription,
                              last_findings:patient.prescriptions[patient.prescriptions.length-1].findings
                               })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    } 


}

const addPrescription = async(req,res) => {

const { pid , rfc, find, pres, dte } = req.body;

if ( !pid , !rfc || !find || !pres || !dte ) {
return res.status(400).json({ success: false, message: "Required fields are missing" });
}

        
try {
    const patient1 = await Patient.findOne({patientId:req.body.pid})
    if(!patient1){
        console.log("invalid patient id entered");
        return res.status(401).json({success: true , data : []})
    }

    const inputDate = new Date(req.body.dte);

    // Format the date in the desired format
    const formattedDateStr = inputDate.toISOString();

    const newPrescription = {
        doctorName: req.doctor.d_name,
        reasonForCheckup: req.body.rfc,
        findings: req.body.find,
        prescription: req.body.pres,
        dateOfDoctorVisit: formattedDateStr,
        };
        
        patient1.prescriptions.push(newPrescription);
        await patient1.save()
        return res.status(200).json({ success: true, message: "Prescription added successfully", data: newPrescription });
} catch (error) {
    console.error("Error adding prescription:", err);
    return res.status(500).json({ success: false, message: "Failed to add prescription", error: err });

}}

module.exports = {addPrescription,DoctorHomePage,ViewPatient}

