const express = require("express");
// const router = require('./routes')

const app = express();
app.use(express.json()); //middleware para q lea el req.body
app.get("/", (req, res) => {
  const { name } = req.body;
  res.send(`hola ${name} 👋🏻`);
});
// app.use('/',router)
app.listen(1337);

//continuar en minuto 44 https://www.students.soyhenry.com/classes/26?cohortId=23
