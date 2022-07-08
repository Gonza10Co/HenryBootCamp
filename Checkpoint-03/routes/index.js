"use strict";

const models = require("../models/model");
const express = require("express");
const { response } = require("../app");

const router = express.Router();
module.exports = router;

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.

router.get("/users", (req, res) => {
  res.json(models.listUsers());
});

router.post("/users", (req, res) => {
  const { email, name } = req.body;
  try {
    const user = models.addUser(email, name);
    res.status(201).json({ msg: user });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.patch("/users/plan", (req, res) => {
  const email = req.query.user;
  try {
    const user = models.switchPlan(email);
    res.json({ msg: user });
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

router.get("/series", (req, res) => {
  res.json(models.listSeries());
});

router.post("/series", (req, res) => {
  const { name, seasons, category, year } = req.body;
  try {
    const serie = models.addSerie(name, seasons, category, year);
    res.status(201).json({ msg: serie });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/series/:category", (req, res) => {
  try {
    const peli = models.listSeries(req.params.category);
    res.json(peli);
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

router.get("/play/:serie", (req, res) => {
  const serie = req.params.serie;
  const user = req.query.user;
  try {
    res.json({ msg: models.play(serie, user) });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

router.get("/watchAgain", (req, res) => {
  const user = req.query.user;
  try {
    res.json(models.watchAgain(user));
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

router.post("/rating/:serie", (req, res) => {
  const serie = req.params.serie;
  const { email, score } = req.body;
  try {
    res.json({ msg: models.rateSerie(serie, email, score) });
  } catch (err) {
    res.status(404).json({ error: err });
  }
});
