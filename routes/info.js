var express = require('express');
var router = express.Router();
const {targetModel}=require('../database/db');

/* GET users listing. */
router.post('/', function(req, res, next) {
    //console.log("info:\n",req.body)
    const targetInstance=new targetModel(req.body)
    targetInstance.save()
    .then((m_res)=>{
        //console.log("m_res:",m_res);
        res.json({uid:m_res._id})

    })
    
});

module.exports = router;