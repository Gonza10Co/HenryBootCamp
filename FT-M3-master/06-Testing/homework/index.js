const express = require("express");
const { sumArray, pluck } = require("./utils");

const app = express();
// app.listen(1337);

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => res.send({ message: "hola" }));

app.get("/test", (req, res) => res.json({ message: "test" }));

app.post("/sum", (req, res) => res.json({ result: req.body.a + req.body.b }));

app.post("/product", (req, res) =>
  res.json({ result: req.body.a * req.body.b })
);

app.post("/sumArray", (req, res) => {
  if (typeof req.body.num !== "number" || !Array.isArray(req.body.array))
    return res.send("paila");
  res.json({ result: sumArray(req.body.array, req.body.num) });
});

app.post("/numString", (req, res) => {
  if (typeof req.body.str !== "string") return res.status(400).send("paila");
  res.json({ result: req.body.str.length });
});

app.post("/pluck", (req, res) => {
  const { array, prop } = req.body;
  if (!Array.isArray(array) || prop === "" || typeof prop !== "string")
    return res.status(400).send("paila");
  res.json({ result: pluck({ array, prop }) });
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
