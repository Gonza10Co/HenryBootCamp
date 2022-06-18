/*  
npm i react-router-dom
npm i react-router-dom@5.3.0 esta version
npm start

En el index.js q es donde se renderiza. agrego:
import {} from "react-router-dom"

HashRouter -> Configurador del servidor pas simple ya que siempre el request es a la misma URL
  Lo malo es q agrega # a la url

BrowserRouter -> Es el mas utilizado, pero en ciertos entornos habria que hacer alguna configuracion. Vamos a irnos por el camino de Browser

En React los booleanos ej exact={true} es lo mismo q escriir solo exact
El orden de los atributos en react no importa
strict tiene que ser exactamente igual la ruta
sensitive (Mayusc minusc) A != a

Para los Links, si uso <a href -> recarga toda la pagina
Si uso 


*/

//Asi quedaria el archivo index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./styles/index.css"
import App from "./App"

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("demo-root"));
