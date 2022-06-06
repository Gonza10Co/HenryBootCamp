'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let left = [];
  let right = [];
  let pivot = Math.floor(array.length / 2);
  for (let index = 0; index < array.length; index++) {
    index === pivot && index++;
    array[index] <  array[pivot] && left.push(array[index]);
    array[index] >= array[pivot] && right.push(array[index]);
  }
  left.length > 1 && (left = quickSort(left));
  right.length > 1 && (right = quickSort(right));
  return [].concat(left,array[pivot],right);
}

console.log(quickSort([9,8,7,6,5,4,3,2,1,0]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let result = [];
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);
  left.length > 1 && (left = mergeSort(left));
  right.length > 1 && (right = mergeSort(right));
  while (left.length + right.length > 0) {
    if(left[0] < right[0]) left[0]? result.push(left.shift()) : result.push(right.shift());
    else right[0] ? result.push(right.shift()) : result.push(left.shift());
  }
  return result;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};