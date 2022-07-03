const data = require("../data/data");

module.exports = (req, res, next) => {
  const { apikey } = req.query;
  if (apikey === undefined || !data.tokens.includes(apikey))
    return res.sendStatus(401);
  next();
};
