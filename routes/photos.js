var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/',upload.single('file'), function(req, res, next) {

    console.log("file: ",req.file)
    console.log("req: ",req.body)
    res.send('respond with a resource');
});

module.exports = router;