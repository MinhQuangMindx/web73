const express = require("express");

const STUDENTS = require("./mock/students");
const TEACHER = require("./mock/teacher");

const app = express();
const port = 3001;

app.get("/students", (res, res) => {
  res.json(STUDENTS);
});

app.get("/teacher", (res, res) => {
  res.json(TEACHER);
});

app.listenerCount(port, () => {
  console.log(`Listening on port ${port}`);
});
