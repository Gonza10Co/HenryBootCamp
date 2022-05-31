'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const miPrimos = [2, 3, 5, 7, 11];
  const miArray = [1];
  let pos = 0;

  while (num > 1) {
    if (num % miPrimos[pos] === 0) {
      miArray.push(miPrimos[pos]);
      num /= miPrimos[pos];
    } else {
      pos++
    }
  }
  return miArray
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        let tmp = array[j+1]
        array[j+1] = array[j];
        array[j] = tmp;        
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i <= array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        let tmp = array[j]
        array[j] = array[j-1];
        array[j-1] = tmp;
      }
    }
  }
  return array;
}

//insertionSort([5, 1, 4, 2, 8])


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let posmin = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[posmin]) posmin = j;    
    }
    let tmp = array[i]
    array[i] = array[posmin];
    array[posmin] = tmp;
  }
  return array;
}

selectionSort([5, 1, 4, 2, 8])

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
