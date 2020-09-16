import React from 'react';

import { ReactComponent as Instagram } from '../../../assets/Instagram.svg';
// import { ReactComponent as Facebook } from '../../../assets/Facebook.svg';
import facebook  from '../../../assets/Facebook.svg';

//todo:: import facebook icon

import style from './Footer.module.scss';

function Footer() {
 return (
  <footer className={style.footer}>
   <p>Copyright by Coders Lab</p>
      <div className={style.icons}>
          <Instagram/>
          <img src={facebook} alt="facebook"/>
      </div>
  </footer>
 );
}
export default Footer;