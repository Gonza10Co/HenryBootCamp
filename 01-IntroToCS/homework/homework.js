'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let n = num.toString();
  let numArray = n.split('');
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[numArray.length-1-i] * Math.pow(2,i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bina = [];
  let n = num;
  while (n > 0) {
    bina.unshift(n % 2)
    n = Math.floor(n / 2);  
  }
  let numBina = bina.toString();
  return numBina.replace(/,/g, "");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}