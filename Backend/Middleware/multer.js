const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body);
        console.log(file);
        cb(null, 'c:/Users/aryam/OneDrive/Desktop/Projects/Digi_Doc/Digi-Doc/Backend/public/temp');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });



module.exports = upload;
