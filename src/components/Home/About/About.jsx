import React from 'react';
import style from './About.module.scss';
import { ReactComponent as Decoration } from "../../../assets/Decoration.svg";
// import { ReactComponent as Signature } from "../../../assets/Signature.svg";
//todo::  nie ładuje sie w pełni
import signature from "../../../assets/Signature.svg";
function About() {


 return (
  <section className={style.about} id={'aboutUs'}>
      <div className={style.about__info}>
          <div className={style.about__info__content}>
              <h1>O nas</h1>
              <Decoration/>
              <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
              {/*<Signature/>*/}
              <img src={signature} alt=""/>
          </div>
      </div>
      <div className={style.about__img}>
      </div>
  </section>
 );
}
export default About;