import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import CommentsPost from "./components/CommentsPost/CommentsPost";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from "./components/Users/Users";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/filter/posts" component={Buscador} />
        <Route exact path="/" component={Users} />
        <Route exact path="/users/:id/posts" component={UserPosts} />
        <Route
          exact
          path="/user/:userid/post/:id/coments"
          component={CommentsPost}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;
