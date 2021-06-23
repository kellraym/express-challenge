const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const students = require('./students.json')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/students', (req, res) => {
  res.send(students)
})

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})