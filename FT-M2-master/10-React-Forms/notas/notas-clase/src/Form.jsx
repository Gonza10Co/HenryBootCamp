import { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    user: "",
  });
  const [error, setError] = useState("");

  function validateEmail(value) {
    var emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.

    if (!emailPattern.test(value)) {
      console.log("entro al if");
      setError("El usuario debe ser un email");
    } else {
      setError("");
    }
  }

  function handleChange(e) {
    const { value, name } = e.target;

    if (name === "user") {
      validateEmail(input.user);
    }

    setInput({
      ...input,
      [name]: value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  }
  return (
    <form>
      <input
        name="name"
        type="text"
        value={input.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="lastname"
        type="text"
        value={input.lastname}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <input
        name="user"
        type="text"
        value={input.user}
        onChange={handleChange}
        placeholder="Usuario"
      />
      {!error ? null : <div>{error}</div>}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
