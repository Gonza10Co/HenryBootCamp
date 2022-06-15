import React from 'react';
import {IoSearchOutline} from 'react-icons/io5'
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div className={styles.searchBar}>
      <input placeholder='Agrega una nueva ciudad...'></input>
      <button onClick={() => onSearch("args")}>
        <IoSearchOutline/></button>
    </div>
  )
};
//Toca meterlo en una arrow function porque necesita un argumento