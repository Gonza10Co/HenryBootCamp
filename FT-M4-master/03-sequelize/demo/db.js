const { Sequelize, Op } = require('sequelize');
const modelPlayer = require('./Models/Player.js');
const modelTeam = require('./Models/Team.js');

// Connection URI
const sequelize = new Sequelize(
  "postgres://postgres:Guadalupe10@localhost:5432/demo",
  {
    // logging: (...msg) => console.log(msg)
    logging: false,
  }
);

modelPlayer(sequelize);
modelTeam(sequelize);

const { Player, Team } = sequelize.models;

// Associations
Player.belongsToMany(Team, { through: 'PlayerTeam' });
Team.belongsToMany(Player, { through: 'PlayerTeam' });

Team.belongsTo(Team, { as: 'subteam' });

// sequelize.sync({force: true})//sincronizo con mi db

module.exports = {
  ...sequelize.models,
  db: sequelize,
  Op
}