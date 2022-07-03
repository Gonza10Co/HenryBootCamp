const data = require("../data/data");
const { getUserById } = require("../services/users");

exports.getAllUsers = (req, res) => res.json(data.users);

exports.getUserDetail = (req, res) => {
  const { id } = req.params;
  try {
    const user = getUserById(id);
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
