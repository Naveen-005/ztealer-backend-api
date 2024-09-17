var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { getStorage, ref , uploadBytes} = require("firebase/storage");



const {photoModel}=require('../database/db');
const {storage}=require('../database/firebase')



router.post('/',upload.single('file'), function(req, res, next) {

    //console.log("file: ",req.file)
    //console.log("req: ",req.body.uid)
    const photosInstance=new photoModel();
    photosInstance.target_id=req.body.uid;
    photosInstance.save()
    .then((m_res)=>{
        console.log("m_res:\n",m_res)
        const ImagesRef = ref(storage, 'images/'+req.body.uid+'/'+m_res.id+'.png');
        uploadBytes(ImagesRef, req.file.buffer).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
    })
    res.send('respond with a resource');
});

module.exports = router;