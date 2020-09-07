import React from 'react';
import style from './Hero.module.scss';
import HeroImg from '../../../assets/Home-Hero-Image.jpg';
import { ReactComponent as Decoration } from '../../../assets/Decoration.svg';

function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.hero__img}/>
            <div className={style.hero__info}>
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <Decoration/>
            <div className={style.hero__buttons}>
                <button>Oddaj rzeczy</button>
                <button>Zorganizuj zbiórję</button>
            </div>
            </div>
        </section>
    );
}

export default Hero;