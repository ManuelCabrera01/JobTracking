const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema ({
  date : {type:date},
  content :{type:text},

});
const Note = mongoose.model('Note', noteSchema );
module.exports = Note;
