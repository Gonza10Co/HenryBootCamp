const { SUMAR_N, SUMAR_UNO } = require("../actions/actionNames.js");

const sumReducer = (state = 0, action) => {
  switch (action.type) {
    case SUMAR_UNO:
      return state + 1;

    case SUMAR_N:
      return state + action.payload;
    default:
      return state;
  }
};

module.exports = sumReducer
