import MostrarLista from "./MostrarLista";

const ContenedorAmigos = () => {
  const name = "Soy Henry";
  const amigos = ["Santi", "Guille", "Facu", "Solano"];
  return (
    <div>
      <h3>Nombre: {name}</h3>
      <MostrarLista names={amigos} />
    </div>
  );
};
export default ContenedorAmigos;
