import React, { useState } from 'react';
import style from './Hamburger.module.scss';
import classNames from 'classnames';

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

 return (
  <div className={classNames(style.Hamburger, {'open': isOpen})} onClick={()=>setIsOpen(prevState => !prevState)} >
   <div className={style.bar}/>
   <div className={style.bar}/>
   <div className={style.bar}/>
  </div>
 );
}
export default Hamburger;