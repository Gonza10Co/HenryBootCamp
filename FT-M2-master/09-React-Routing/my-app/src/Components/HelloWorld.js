import React, { useState, useRef } from "react";

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);
  const textInput = useRef(null);

  const onButtonClick = (e) => {
    e.preventDefault();
    const name = textInput.current.value;
    setName(name);
  };
  return (
    <div>
      <form onSubmit={onButtonClick}>
        <input type="text" ref={textInput} />
        <button>Poner Nombre</button>
      </form>
      Hola, {name}!!
    </div>
  );
};

export default HelloWorld;
