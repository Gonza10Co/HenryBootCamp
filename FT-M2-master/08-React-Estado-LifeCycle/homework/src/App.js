import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
// import data from './data.js';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77,
    };

export default function App() {
  const [cities, setCities] = useState([]);

  const addCity = city => {
    setCities(prevCities => [...prevCities, city]);
  }

  //Filter devuelve un nuevo array, no es destructivo.
  const removeCity = cityId => { 
    setCities(prevCities => 
      prevCities.filter(city => cityId !== city.id)
    );
  };

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)//Api Navegador
    .then(r => r.json())//r -> respuesta. La convertimos a un objeto json
    .then((recurso) => {
        if(recurso.main !== undefined){//si llegaron datos
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          addCity(ciudad);//Agregamos la ciudad
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <h1>Título</h1>
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={removeCity} />
    </div>
  );
}
