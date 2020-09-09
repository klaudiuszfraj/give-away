import React from 'react';
import style from './Option.module.scss';

function Option({title, classN}) {
 return (
  <button className={style.btn}>
      {title}
  </button>
 );
}
export default Option;