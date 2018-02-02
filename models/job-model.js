const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
company:      { type: String},
url:                {type: String},
location:        { type: String},
status :           { type: Schema.Types.ObjectId, ref: 'Status', required: true },
personOfContact:   { type: String},
personOfContact2:  {type: String},
email:                      {type: String},
notes :                     { type: Schema.Types.ObjectId, ref: 'Notes', required: true },
phone:                      {type: String}
});
const Job = mongoose.model('Job', jobSchema );
module.exports = Job;
