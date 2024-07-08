var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const {photoModel}=require('../database/db');

router.post('/',upload.single('file'), function(req, res, next) {

    //console.log("file: ",req.file)
    //console.log("req: ",req.body.uid)
    const photosInstance=new photoModel();
    photosInstance.target_id=req.body.uid;
    photosInstance.save()
    .then((m_res)=>{
        console.log("m_res:\n",m_res)
    })
    res.send('respond with a resource');
});

module.exports = router;