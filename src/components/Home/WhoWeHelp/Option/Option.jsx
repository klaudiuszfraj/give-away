import React from 'react';
import style from './Option.module.scss';

function Option({title, onSetItem}) {
 return (
  <button className={style.btn} onClick={(e)=>{onSetItem(title)}}>
      {title}
  </button>
 );
}
export default Option;