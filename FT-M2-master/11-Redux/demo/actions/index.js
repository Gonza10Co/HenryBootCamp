const { SUMAR_N, SUMAR_UNO } = require("./actionNames");

exports.sumarUno = () => {
  return { type: SUMAR_UNO };
};

exports.sumarN = (num) => {
  //Action creator
  return {
    type: SUMAR_N,
    payload: num,
  };
};
