/* NOTAS DE CLASE:
Los componentes reciben propiedades y mantienen un estado que se puede cambiar a lo largo de la vida del componente.
El estado no se cambia instantaneamente con setState, sino que lo hace luego de ejecutar toda la funcion. Me toca hacerlo con una funcion para que sea inmediato.

para no tener que usar react.useState, usar import React, {useState} from 'react'; //imp 2 al tiempo

CLICLO DE VIDA
OJO -> COMPONENTES DE TIPO CLASE
caso 1. componentDidMount(){} //se ejecuta cuando se monta el componente
caso 2. componentDidMUpdate(){} //se ejecuta cuando se actualiza el componente
caso 3. componentWillUnmount(){} //se ejecuta cuando se desmonta el componente


OJO -> COMPONENTES FUNCIONALES
useEffect(func,array){} //se ejecuta cuando se monta el componente ejemplo:
[]-> si no le paso nada solo se ejcuta cuando el componente se monta
[counter] -> se ejecuta de nuevo cuando el componente se actualiza

Caso 1.     useEffect(() => {console.log("se monto el componente counter")}, []);
Caso 1.y 2  useEffect(() => {console.log("se monto el componente counter")}, [counter]);
Caso 3.     useEffect(() => {return () => { //retorna una funcion
    console.log("se monto el componente counter")}, []);
  }
*/

class CounterClass extends React.Component {
  constructor(props) {
    super(props);//esto es para inicializar la clase que queremos extender
    this.state = (counter = 0);
    this.handleAdd = this.handleAdd.bind(this);  
  } 

  handleAdd() { //Como es clasic function toca hacerle el bind arriba
    this.setState({counter: this.state.counter + 1})
  }

  handleRemove = () => {
    this.setState({counter: this.state.counter - 1})
  }

  handleAddX2 = () => {
    this.setState((state) => ({counter: state.counter + 1}))
    this.setState((state) => ({counter: state.counter + 1}))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>-</button>
        <span style={{ margin: "0 2rem;" }}>El valor del contador es: {this.state.counter}</span>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddX2}>+</button>
      </div>
    )
  }
}

// //lo mismo pero con un componente de tipo funcional
function CounterFunction() {
  const [contador, setState] = React.useState(10);
  function handleAdd() {
    setState(contador + 1);
  }
  function handleAddX2() {
    setState((state)=>(contador + 1 ));
    setState((state)=>(contador + 1 ));
  }
  function handleRemove() {
    setState(contador - 1 );
  }

  return (
      <div>
        <button onClick={handleRemove}>-</button>
        <span style={{ margin: "0 2rem;" }}>El valor del contador es: {state.counter}</span>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleAddX2}>+</button>
      </div>
    )
}