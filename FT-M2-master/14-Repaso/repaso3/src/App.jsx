import './App.css'
import Home from './components/Home'
import About from "./components/About";
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserDetail from './components/UserDetail';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/user/:idUser" component={UserDetail} />
    </div>
  );
}

export default App
