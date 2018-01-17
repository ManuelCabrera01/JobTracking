const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const JobScheme = new Schema ({
company : String,
url: String,
location: String,
personOfContact: String,
personOfContact2: String,
email:String,
notes:String,
phone:Number
});
const Job = mongoose.model('Job',JobScheme );
module.exports = Job;
