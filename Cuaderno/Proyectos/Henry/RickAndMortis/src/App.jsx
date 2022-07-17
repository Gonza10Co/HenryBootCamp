import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from "./views/CharacterDetail";
import Characters from "./views/Characters";
import Home from "./views/Home";

function App() {
  const loading = useSelector((state) => state.app.loading);
  return (
    <div>
      {loading && (
        <div class="demo-container">
          <div class="progress-bar">
            <div class="progress-bar-value"></div>
          </div>
        </div>
      )}
      <Route path="/" exact component={Home}></Route>
      <Route path="/characters" exact component={Characters}></Route>
      <Route path="/characters/:id" exact component={CharacterDetail}></Route>
    </div>
  );
}

export default App;
