//  import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HelloWorld from "./Components/HelloWorld";
import ContenedorAmigos from "./Components/ContenedorAmigos";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

const array = [
  { id: 1, name: "Uno" },
  { id: 2, name: "Dos" },
  { id: 3, name: "Tres" },
  { id: 4, name: "Cuatro" },
];

const C = () => {
  return (
    <div>
      <h1>Componente C</h1>
      <ul>
        {array.map((ele) => (
          <li key={ele.id}>
            <Link to={`/c/${ele.id}`}>Ir al id: {ele.id}</Link>
          </li>
        ))}
      </ul>
      <section>
        <Route
          path="/c/:id"
          render={({ match }) => <CDetail id={match.params.id} />}
        />
      </section>
    </div>
  );
};

const CDetail = (p) => {
  return (
    <div>
      <h1>ID: {p.id}</h1>
      <h2>Name: {array.find((ele) => ele.id === Number(p.id)).name}</h2>
      {/* <h1>ID: {p.match.params.id}</h1>
      <h2>Name: {array.find(ele => ele.id === Number(p.match.params.id)).name}</h2> */}
    </div>
  );
};

const NavBar = () => {
  return (
    <header>
      <nav style={{ display: "flex", gap: "3rem" }}>
        <NavLink exact to="/" activeStyle={{ color: "red" }}>
          Home
        </NavLink>
        <NavLink to="/a"> Ir a la pagina `/a`</NavLink>
        <NavLink to="/b"> Ir a la pagina `/b`</NavLink>
        <NavLink to="/c"> Ir a la pagina `/c`</NavLink>
      </nav>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <h1>THIS IS HOME</h1>
      </Route>
      <Route exact path="/a" component={HelloWorld} />
      <Route exact path="/b" component={ContenedorAmigos} />
      <Route path="/c" component={C} />
      <Route path="*">
        <h1>404 ERROR</h1>
      </Route>
    </Switch>
    {/* <Route  path="/c/:id" component={CDetail} /> */}
  </BrowserRouter>
);
