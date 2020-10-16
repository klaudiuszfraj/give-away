import React, { useState } from 'react';
import style from './Hamburger.module.scss';
import classNames from 'classnames';

function Hamburger({ isOpen, handleOpen }) {

 return (
  <div className={classNames(style.Hamburger, {'open': isOpen})} onClick={()=>handleOpen(prevState => !prevState)} >
   <div className={style.bar}/>
   <div className={style.bar}/>
   <div className={style.bar}/>
  </div>
 );
}
export default Hamburger;