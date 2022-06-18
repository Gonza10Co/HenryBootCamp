const MostrarLista = ({ names }) => {
  return (
    <div>
      <h3>Amigos</h3>
      <ul>
        {names.map((amigo,id) => <li key={id}>{amigo}</li>)}
      </ul>
    </div>
  );
};

export default MostrarLista;
