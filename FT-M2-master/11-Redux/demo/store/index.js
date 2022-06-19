const redux = require("redux");
const reducer = require("../reducers");

const store = redux.createStore(reducer);

module.exports = store;
