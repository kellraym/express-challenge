const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const students = require('./students.json')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/students', (req, res) => {
  let firstName = req.query.search;
  if (firstName) {
    let student = students.filter(student => student.name[0].toLowerCase() === firstName.toLowerCase())
    if (student.length > 0) {
      res.send(student)
    } else {
      res.send(students)
    }
  } else {
    res.send(students);
  }
})

app.get('/students/:studentId', (req, res) => {
  let id = req.params.studentId
  let student = students.filter(student => student.id === Number(id))

  if (student) {
    res.send(student)
  } else {
    res.send(students)
  }
})

app.get('/grades/:studentId', (req, res) => {
  let id = req.params.studentId
  let student = students.filter(student => student.id === Number(id))
  let grades = student[0].grades;
  // let [grade1, grade2, grade3] = ...grades
  if (student) {
    res.send(grades)
  } else {
    res.send(students)
  }
})

// app.post('/grades')

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

