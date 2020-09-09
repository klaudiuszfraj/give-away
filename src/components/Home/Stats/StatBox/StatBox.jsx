import React from 'react';
import style from './Statbox.module.scss';

function StatBox({ number, title, text }) {
 return (
  <div className={style.StatBox}>
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p>{text}</p>

  </div>
 );
}
export default StatBox;