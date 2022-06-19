import { useState } from "react";

function Family() {
  const modeloFamiliar = { nombre: "" };
  const [familiar, setFamiliar] = useState([{ ...modeloFamiliar }]);

  const [persona, setPersona] = useState({
    nombre: "",
  });

  const agregaFamiliar = () => {
    setFamiliar([...familiar, { ...modeloFamiliar }]);
  };

  // Este metodo lo usamos para capturar el valor ingresado en nuestro input estatico
  const handlePersonaChange = (e) =>
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });

  // Este metodo lo usamos para controlar los inputs que se van creando dinamicamente
  // Primero hacemos una copia del estado `familiar`
  // Utilizamos el `id` y el atributo `data-name` que le asignamos a cada input para poder reconocerlos entre si.
  // Y por ultimo modificamos el state para actualizar segun los cambios que se realizaron en los inputs.
  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange} // Agregamos el metodo a cada input que generamos
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Family;
