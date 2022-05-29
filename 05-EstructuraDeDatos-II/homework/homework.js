"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {//creo una clase de linked list
  this.head = null;//creo el primer vagon vacion
}

function Node(value) {//creo las caracteristicas de cada vagon (objeto)
  this.value = value;//cada vagon debe tener una propiedad valor
  this.next = null;//cada vagon debe tener una propiedad next (vinculo) inicial/ null
}

LinkedList.prototype.add = function (value) {//funcion que agrega valores prototipo de linked list
  const node = new Node(value);//Instancion node como Node (props valor,next)
  if (!this.head) {//si el primer vagon no existe
    this.head = node;//lo creo, es decir le agrego valor y next
  } else {//si hay primer vagon
    let current = this.head;//me paro en el primer vagon
    while (current.next) {//mientras este vagon tenga una propiedad next
      current = current.next;//salto al siguiente vagon
    }
    current.next = node;//cuando estoy en el ultimo vagon le agrego otro vagon a next
  }
}

LinkedList.prototype.remove = function (value) {
  if (!this.head) return null;
  let penultimo = this.head;
  if (!penultimo.next) {//si solo hay un elemento
    let miVal = penultimo.value;//asigo el valor a una variable
    delete penultimo.value;//borro value
    delete penultimo.next;//borro next
    this.head = null;//asigno null a head
    return miVal;//retorno la variable
  }
  while (penultimo.next.next) {//mientras hayan dos vagones adelante
    penultimo = penultimo.next;//salto un vagon
  }//llegue al penultimo vagon
  let miVal = penultimo.next.value;//asigno el valor a una variable
  penultimo.next = null;//asigno null a next
  return miVal;
}

LinkedList.prototype.search = function (value) {
  if (!this.head) return null;//si no hay primer vagon paila
  let ultimo = this.head;//me paro en el primer vagon
  if (typeof (value) === 'function') {//si el argumento es funcion
    while (!value(ultimo.value)) {//si retorna false
      if (!ultimo.next) return null;//si no hay mas vagones, paila
      ultimo = ultimo.next;//salto al siguiente vagon
    }
  } else {
    while (ultimo.value != value) {//si el valor del vagon es dif a value
      if (!ultimo.next) return null;//si no hay mas vagones, paila
      ultimo = ultimo.next;//salto al siguiente vagon
    }
  }
  return ultimo.value;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {//creo una clase HashTable con:
  this.numBuckets = 35;//creo 35 cajones
  this.closet = new Array(this.numBuckets);//creo una lista vacia
}

HashTable.prototype.hash = function (miString) {//funcion q asigna la posicion
  let acum = 0;
  for (let i = 0; i < miString.length; i++) {//recorre la cadena
    acum += miString.charCodeAt(i);//acumula el valor
  }
  return acum % this.numBuckets;//retorna el modulo
}

HashTable.prototype.set = function (clave, valor) {
  if (typeof clave !== 'string') throw new TypeError('Keys must be strings');//creo el tipo de error
  let mibucket = this.hash(clave);//asigno a mibucket la posicion de clave
  let micloset = this.closet;//asigno a mi closet una matriz vacia
  if (!micloset[mibucket]) micloset[mibucket] = {};
  micloset[mibucket][clave] = valor;
}

HashTable.prototype.get = function (key) {
  let mibucket = this.hash(key);//Busco donde esta mibucket, no tengo q recorrer
  if (this.closet[mibucket]) return this.closet[mibucket][key];
}

HashTable.prototype.hasKey = function (key) {
  let mibucket = this.hash(key);//Busco donde esta mibucket, no tengo q recorrer
  if (this.closet[mibucket].hasOwnProperty(key)) return true;
  return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
