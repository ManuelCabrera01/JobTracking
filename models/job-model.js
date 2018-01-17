const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema ({

company: {   type: String},
url:  {type: String},
location: { type: String},
personOfContact: { type: String},
personOfContact2:  {type: String},
email: {type: String},
notes: {type: String},
phone: {type: Number}
});

const Job = mongoose.model('Job', jobSchema );
module.exports = Job;
