class NodeBST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    _size(value) {//Privado
        let result = 0;
        for (let i = o; i < value.length; i++) {
            result += value.charCodeAt(i);
            }
        return result    
    }

    add(value) {
        if (typeof value !== 'string')
            throw new TypeError("Tipo de dato no soportado");
        // if(this._size(value) < this._size(this.value) por charCode
        if (value.length < this.value.length) { //visto por tamaño
            if (this.left)
                this.left.add(value);
            else
                this.left = new Node(value);
        } else {
            if (this.right)
                this.right.add(value);
            else
                this.right = new NodeBST(value);
        }
    }

    count(value) {
        let count = 0;
        //Si voy a contar la cantidad de nodos, omito la linea de abajo y el count en 1.
        this.value === value && count++;//es una condicional, si true aumenta contador
        

        //Si quiero saber cuantos niveles tiene, pregunto cual de estos dos tiene el valor mas grande. 
        if (this.left) count += this.left.count(value);
        if (this.right) count += this.right.count(value);
        return count;
    }
}


const first = new NodeBST("hola");
first.add('hola');
first.add('chau');
first.add('hola');
console.log(first.count("hola"));

