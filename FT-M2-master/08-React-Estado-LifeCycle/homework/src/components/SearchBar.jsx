import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const input = document.getElementById("myText")
      onSearch(input.value);
      input.value = "";
    }}>
      <input
        id="myText"
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
