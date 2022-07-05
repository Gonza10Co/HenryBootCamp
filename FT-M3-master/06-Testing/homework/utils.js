const sumArray = (array, num) => {
  if (!Array.isArray(array)) throw new TypeError("array");
  if (typeof num !== "number") throw new TypeError("number");
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === num) return true;
    }
  }
  return false;
};

const pluck = (obj) => {
  const myArray = [];
  const { array, prop } = obj;
  array.forEach((element) => {
    element[prop] && myArray.push(element[prop]);
  });
  return myArray
}
 

module.exports = {
  sumArray,
  pluck
};
