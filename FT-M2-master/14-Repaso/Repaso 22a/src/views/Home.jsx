import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <main>
      <h1>Hola 👋🏻</h1>
      <div>
        <Link to="/characters">Ver los personajes de Rick and Morty</Link>
      </div>
    </main>
  )
};
