const { Router } = require("express");
const { Op, Ability, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const { code, name, age, race, hp, mana, date_added } = req.body;
  if (!code || !name || !hp || !mana)
    return res.status(404).send("Falta enviar datos obligatorios");
  try {
    const newChar = await Character.create({
      code,
      name,
      age,
      race,
      hp,
      mana,
      date_added,
    });
    res.status(201).json(newChar);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.post("/bulk", async (req, res) => {
  res.json(await Character.bulkCreate(req.body));
});

router.get("/", async (req, res) => {
  const { name, age, race, hp } = req.query;
  const paramsFind = {};
  paramsFind.where = {};

  if (name && hp) paramsFind.attributes = ["name", "hp"];
  if (race) paramsFind.where.race = race;
  if (age) paramsFind.where.age = age;

  const chars = await Character.findAll(paramsFind);
  // console.log(chars.map((p) => p.toJSON()));
  res.json(chars.length ? chars : "No se encontro ningun personaje");
});

router.get("/young", async (req, res) => {
  const youngs = await Character.findAll({
    where: {
      age: {
        [Op.lt]: 25,
      },
    },
  });
  // console.log(youngs.map((p) => p.toJSON()));
  res.json(youngs.length ? youngs : "No se encontro ningun personaje");
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;
  const char = await Character.findByPk(code);
  char
    ? res.json(char)
    : res
        .status(404)
        .send(`El código ${code} no corresponde a un personaje existente`);
});

router.put("/addAbilities", async (req, res) => {
  const { codeCharacter, abilities } = req.body;
  let arrayAbilit = [];
  for (let i = 0; i < abilities.length; i++) {
    let name = abilities[i].name;
    let mana_cost = abilities[i].mana_cost;
    const [att, created] = await Ability.findOrCreate({
      where: {
        name,
        mana_cost,
      },
      defaults: {
        name,
        mana_cost,
      },
    });
    arrayAbilit.push(att.id);
  }

  const char = await Character.findByPk(codeCharacter);
  res.json(await char.addAbilities(arrayAbilit));
});

router.put("/:attribute", async (req, res) => {
  const { attribute } = req.params;
  const { value } = req.query;
  const objWhat = {};
  objWhat[attribute] = value;
  const objWhere = { where: {} };
  objWhere.where[attribute] = { [Op.is]: null };
  await Character.update(objWhat, objWhere);
  res.send("Personajes actualizados");
});

router.post("/role", async (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(404).send("Falta enviar datos obligatorios");
  try {
    const newRol = await Role.create({
      name,
      description,
    });
    res.status(201).json(newRol);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.get("/roles/:codeCharacter", async (req, res) => {
  const { codeCharacter } = req.params;

  const allData = await Character.findOne({
    where: {
      code: codeCharacter
    },
    include: [
      {
        model: Role,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  res.json(allData);
});

module.exports = router;
