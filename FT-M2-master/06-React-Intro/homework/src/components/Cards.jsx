import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cards}>
    {cities.map((c) => (
      <Card
        key={c.name}//WARNING! Cualquier prop unica q lo identifique
        max={c.main.temp_max}
        min={c.main.temp_min}
        name={c.name}
        img={c.weather[0].icon}
        onClose={() => alert(c.name)}
      />
    ))}
  </div>
  );
};