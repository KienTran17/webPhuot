let multer = require('multer'); //1

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/upload');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});

function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/png' 
        || file.mimetype === 'image/jpeg'){
        return cb(null, true);
    }
    cb(new Error('Sai dinh dang file'));
}

let upload = multer({
    storage, 
    
    limits: {fileSize: 1024 * 1024},
    fileFilter
}).any(); //1111

var limits = {
  fileSize: 2097152*20
}

function getArrayUpload(fieldname){
  return multer({storage, fileFilter, limits }).array(fieldname);
}
module.exports = getArrayUpload;