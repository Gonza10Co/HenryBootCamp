import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import HelloWorld from './Components/HelloWorld'
import ContenedorAmigos from './Components/ContenedorAmigos';

function App() {
  return (
    <div>
      <Route path="/lista" component={HelloWorld} />
      <Route path="/" component={ContenedorAmigos} />
    </div>
  );
}

export default App

      // <Route path="/lista" component={HelloWorld} />
      // <Route path="/" component={ContenedorAmigos} />