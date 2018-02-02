const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema ({
    date : {type:date},
applied :{type: Boolean},
email-A:{type: Boolean},
call-A:{type: Boolean},
firstStInterview :{type: Boolean},
email-Thanks:{type: Boolean},
email-Flow:{type: Boolean},
call-flow:{type: Boolean},
secondInterview:{type: Boolean},
email-Thanks:{type: Boolean},
email-Flow:{type: Boolean},
call-flow:{type: Boolean},
thirdInterview:{type: Boolean},
email-Thanks:{type: Boolean},
email-Flow:{type: Boolean},
call-flow:{type: Boolean},
)};
const Status = mongoose.model('Status', statusSchema );
module.exports = Status;
