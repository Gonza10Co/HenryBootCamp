//https://www.escuelafrontend.com/articulos/data-fetching-con-react ----------------> Muy bueno

// fetch("https://dog.ceo/api/breeds/image/random") // ⬅️ 1) llamada a la API, el resultado es una Promise
//   .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
//   .then((dog) => console.log(dog)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto

// Notar que el segundo argumento de useEffect es un arreglo vacío ([]). Esto lo hago así porque la idea es ejecutar el efecto (llamada a la API) una sola vez (luego del primer renderizado). Si omitimos esto, cada vez que se renderice el componente se volverá a ejecutar el useEffect.

// Para guardar los datos utilizaremos una nueva variable de estado llamada imageUrl, donde guardaremos la URL de la imagen del perrito a mostrar:

//SIEMPRE TENDREMOS QUE SEGUIR LOS SIGUIENTES PASOS:
// 1) Inicia tu componente en modo “cargando”. (useState)
// 2) Luego de que tu componente haya renderizado, haz la petición de datos. (useEffect)
// 3) Cuando la petición de datos haya finalizado, guarda los datos y desactiva el modo “cargando”.
// 4) Mostrar cargando o los datos cuando corresponda.
// 5) Si ocurre algún problema al obtener los datos del pe

import { useEffect, useState } from "react";

const styledButton = {
  backgroundColor: "pink",
  border: "2px solid pink",
  borderRadius: "5px",
  color: "black",
  padding: "10px",
  boxShadow: "5px 5px 5px 0px lightgray",
};

export default function Dogs() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          if (response.ok) {
            // ⬆ verificamos que todo esté bien con la respuesta HTTP
            response.json().then((resJson) => {
              // ⬆ si está todo bien, proseguimos a transformar a JSON y actualizar los estados
              setImage(resJson.message); // ➡ Guardar datos
              setLoading(false); // ➡ Desactivar modo "cargando"
              setError(null); // ➡ Desactivar modo "cargando"
            });
          } else {
            setError("Hubo un error al obtener el perrito"); // ⬅️ hubo un problema HTTP 4XX o 5XX
          }
        })
        .catch((error) => {
          // ⬆ hubo un problema que no permitió hacer la solicitud
          setError("No pudimos hacer la solicitud para obtener el perrito");
        });
    }
  }, [loading]); //⬅️ ahora este efecto se ejecutará cada vez que cambie este estado

  const randomDog = () => setLoading(true);

  let breed = [];
  if (!loading) {
    breed = image.split("/");
  }

  if (loading) return <h1>Cargando... </h1>;

  return (
    <div style={{ margin: "auto" }}>
      <h1>{breed[4].toUpperCase()} </h1>
      <div>
        <img style={{ width: "300px", heigh: "500" }} src={image} alt="" />
      </div>
      <div>
        <button style={styledButton} onClick={randomDog}>
          ¡Otro!{" "}
          <span role="img" aria-label="corazón">
            ❤️
          </span>
        </button>
      </div>
    </div>
  );
}
