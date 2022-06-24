import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Characters from "./views/Characters";
import CharacterDetail from "./views/CharacterDetail";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Characters/" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
    </Switch>
  );
}
