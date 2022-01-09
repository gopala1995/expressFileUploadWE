const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploadsFile'))
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now();
      cb(null, uniqueprefix + '-' + file.originalname )
    }
  })
  
  


const upload = multer({storage:storage,fileFilter:fileFilter,limits:{
  fileSize: 1024 * 1024 * 5
} })