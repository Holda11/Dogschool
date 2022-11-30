const path = require('node:path') 
const express = require('express') 
const multer = require('multer') 
const router = express.Router()

//!nejspíše špatná cesta

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './uploads')
  },
  filename: (req, file, cb)=>{
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({storage: fileStorageEngine})

router.post('/', upload.single('image') ,(req, res)=>{
  console.log(req.file)
  res.send(`${req.file.filename}`)
})


module.exports = router