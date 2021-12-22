var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  Schema = require("./models/Schema");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/cheggQA", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
  Schema.find({}, (err, allstudents) => {
    if (err) {
      console.log(err);
    } else {
      res.render("append_to_table", { student: allstudents });
    }
  });
});

app.post("/", (req, res) => {
  var student_name = req.body.student_name;
  var student_id = req.body.student_id;
  var course = req.body.course;
  var grade = req.body.grade;

  var student = {
    student_name: student_name,
    student_id: student_id,
    course: course,
    grade: grade,
  };

  Schema.create(student, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

//port
app.listen(PORT, () => {
  console.log(`The Server Started at Port ${PORT}`);
});
