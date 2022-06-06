/**
 * Función generadora de Queue
 * @returns ['Enqueue function', 'Dequeue function', 'Size function' ]
 */

function generateQueue() {
    let data = [];

    /**
     * Agrega un elemento a la queue
     * @param {*} value 
     */
    function enqueue(value) { 
        data.push(value);
    }

    /**
     * Retira el primer elemento de la queue
     * @returns 
     */
    function dequeue() {
        if (data.length) {
            return data.shift();
        } else {
            return undefined;
        }
    }

    /**
     * Retorna el tamaño de la queue
     * @returns 
     */
    function size() { 
        return data.length;
    }

return [enqueue, dequeue, size]

}

const [add, remove, count] = generateQueue(); //destructuring

add(5);
add(7);
add(9);
console.log(count());

