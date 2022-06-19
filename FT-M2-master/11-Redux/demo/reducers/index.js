const redux = require("redux");
const sumReducer = require("./sumReducer");
const countReducer = require("./countReducer");

module.exports = redux.combineReducers({
  suma: sumReducer,
  count: countReducer,
});
