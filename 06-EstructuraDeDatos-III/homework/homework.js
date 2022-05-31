"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) { 
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(val){
  val < this.value ?
    (!this.left ? this.left = new BinarySearchTree(val) : this.left.insert(val)) :
    (!this.right ? this.right = new BinarySearchTree(val) : this.right.insert(val));
}

BinarySearchTree.prototype.size = function () {
  let cuenta=1;
  if(this.left) cuenta += this.left.size();
  if(this.right) cuenta += this.left.size();
  return cuenta
}

BinarySearchTree.prototype.contains = function (val) { 
if (this.value === val) return true;
  if (this.left?.contains(val)) return true; 
  if (this.right?.contains(val)) return true;
return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order = "in-order") {
  switch (order) {
    case "in-order": {
      this.left?.depthFirstForEach(cb, order);
      cb(this.value);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "pre-order": {
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "post-order": {
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
}
  
//defino el [] como parametro para que se mantenga en todos los niveles
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) { 
  cb(this.value);//mando el valor del nodo actual
  if (this.left) queue.push(this.left);//meto en la cola el izq
  if (this.right) queue.push(this.right);//meto en la cola el der
  if (queue.length) {//si la cola tiene algo
    queue.shift().breadthFirstForEach(cb, queue);//saco el nodo y ejecuto el nodo
  }

};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
