const express = require('express');
const authenticateJWT = require('../../middlewares/authenticator');
const csvUpload = require('../../controllers/uploader/csvUpload');
const getFiles = require('../../controllers/uploader/getAllFiles');

const upload = require('../../middlewares/multer');
// const {authenticateJWT}=require("../../middlewares/authenticator")
const router = express.Router();

router.post('/upload' , upload.single("csvfile"),authenticateJWT, csvUpload);
router.post("/getfiles",authenticateJWT,getFiles)


module.exports = router;