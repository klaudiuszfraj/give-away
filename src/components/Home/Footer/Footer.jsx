import React from 'react';

import { ReactComponent as Facebook } from '../../../assets/Facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/Instagram.svg';


//todo:: import facebook icon

import style from './Footer.module.scss';

function Footer() {
 return (
  <footer className={style.footer}>
   <p>Copyright by Coders Lab</p>
      <div className={style.icons}>
          <Facebook/>
          <Instagram/>
      </div>
  </footer>
 );
}
export default Footer;