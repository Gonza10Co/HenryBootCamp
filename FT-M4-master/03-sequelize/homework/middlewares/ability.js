const { Router } = require('express');
const { Character, Ability } = require('../db');
const router = Router();

router.post("/", async (req, res) => {
  const { name, description, mana_cost } = req.body;
  if (!name || !mana_cost)
    return res.status(404).send("Falta enviar datos obligatorios");
  try {
    const newAbility = await Ability.create({
      name,
      description,
      mana_cost,
    });
    res.status(201).json(newAbility);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.post("/bulk", async (req, res) => {
  res.json(await Ability.bulkCreate(req.body));
});

router.put("/setCharacter", async (req, res) => {
  const { idAbility, codeCharacter } = req.body;
  const char = await Character.findByPk(codeCharacter);
  await char.addAbility(idAbility);
  res.json(await Ability.findByPk(idAbility));
});

module.exports = router;

