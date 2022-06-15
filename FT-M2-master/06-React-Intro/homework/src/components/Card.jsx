import React from 'react';
import style from './Card.module.css'
import { IoCloseCircleOutline } from 'react-icons/io5'
import icon_09d from '../assets/09d.png'
import icon_03n from '../assets/03n.png'

export default function Card({max, min, name, img, onClose}) {
  return (
    <div className={style.card}>
      <button className={style.closeButton} onClick ={onClose}><IoCloseCircleOutline/></button>
      <div className={style.cityName}>
        <strong>{name}</strong>
      </div>
        <div className={style.temp}>
          <span>Min</span>
          <span>{min}</span>
        </div>
        <div className={style.temp}>
          <span>Max</span>
          <span>{max}</span>
        </div>
        <div>
        <WeatherIcon icon={img}/> 
        </div>
    </div>
  );
};

function WeatherIcon({ icon }) {
  switch (icon) {
    case "03n":
      return <img src={icon_03n} alt="shower rain" />;
    //   break;
  
    default:
      return <img src={icon_09d} alt="shower rain" />;
  }
}