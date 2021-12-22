var mongoose = require("mongoose");
//schema Setup
const Schema = new mongoose.Schema({
  student_name: String,
  student_id: Number,
  course: String,
  grade: String,
});

module.exports = mongoose.model("Schema", Schema);
