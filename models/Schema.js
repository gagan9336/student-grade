var mongoose=require("mongoose");
//schema Setup
const Schema = new mongoose.Schema({
    student_name: String,
    student_id: String,
    course: String,
});

module.exports = mongoose.model("Schema", Schema);