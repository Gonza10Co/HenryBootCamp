/* 
Lo primero que necesito es saber el estado.
Las actions siempre son objetos, y ese objeto siempre tiene una propiedad type.
Hay que poner un estado por defecto.
El initialState puede ser cualquier tipo de dato, obj, arr, num bool, etc
Como le doy la orden de q se ejecute esa accion, store va a tener un metodo q es el dispatch. Dispatch es un objeto q es una accion con una prop type

Paso 1. Creo un Store (Create Store), para esto necesito una funcion reductora.
Paso 2. Ese reducer lo q hace es recibir un estado previo y una accion.

Si yo importo la carpeta, es el index

Orden de trabajo con Redux
1. Construir el reducer.
2. Definir las acciones
3. Definir las action types
4. Create el Store

*/

const store = require("./store");
const { sumarUno, sumarN } = require("./actions");

store.subscribe(() => console.log(store.getState()));

store.dispatch(sumarUno());
store.dispatch(sumarUno());
store.dispatch(sumarN(25));
