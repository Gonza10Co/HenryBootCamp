const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2
nuevoContador()     // 3

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2
otroContador()      // 3





















// // Listas Enlazadas

// function Node(data) {
//     this.data = data;
//     this.next = null;//aca agrego un nuevo valor.
// }

// function List() {
//     this._length = 0;
//     this.head = null;//aca se creo el primer vagon.
// }

// function LinkedList() {
//     this.head = null;
// }

// function Node(val) {
//     this.data = val;
//     this.next = null;
//     this.prev = null;
// }

// LinkedList.prototype.add = function (val) {
//     const node = new Node(val); //creo un nuevo nodo
//     if(!this.head) {//Si no hay vagon inicial lo crea
//       this.head = node;
//     } else {
//       let current = this.head;// aca almaceno la referencia del nodo
      
//       while(current.next) { //para ir recorriendo
//         current = current.next;//cambio la referencia
//       }
      
//       node.prev = current;
//       current.next = node;//Le asigno el valor al ultimo vagon
//     }
// }

// const list = new LinkedList()

// list.add(5);
// list.add(25);
// list.add(100);

// console.log(list);