const { Router } = require("express");
const {
  getContacts,
  getContactById,
  addContact,
  deleteContact,
  addPhone,
} = require("../models");

const routes = Router();

routes.get("/contacts", (req, res) => {
  if (req.query.q) return res.json(getContacts(req.query.q));
  res.json(getContacts());
});

routes.get("/contacts/:id", (req, res) => {
  const contact = getContactById(Number(req.params.id));
  if (!contact)
    return res.status(404).json({ message: "Contacto no encontrado" });
  res.json(contact);
});

routes.post("/contacts/:id", (req, res) => {
  const id = Number(req.params.id);
  const phone = req.body.phone;
  const contact = addPhone(id, phone);
  console.log(contact)
  if (!contact)
    return res.status(404).json({ message: "Contacto no encontrado" });
  res.json(contact);
});

routes.post("/contacts", (req, res) => {
  const { name, surname } = req.body;
  try {
    const contact = addContact(name, surname);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

routes.delete("/contacts/:id", (req, res) => {
  if (!deleteContact(Number(req.params.id))) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
});

module.exports = routes;
