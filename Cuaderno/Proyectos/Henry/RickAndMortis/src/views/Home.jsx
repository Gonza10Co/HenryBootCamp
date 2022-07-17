import { Link } from "react-router-dom"

export default () => {
  return (
    <main>
      <h1>
        Hola 👋🏻
      </h1>
      <section>
        <Link to='/characters'>Ver los personajes de Rick and Morty</Link>
      </section>
    </main>
  )
}

