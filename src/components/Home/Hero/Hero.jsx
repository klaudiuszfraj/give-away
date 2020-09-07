import React from 'react';
import style from './Hero.module.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from '../../../assets/Decoration.svg';

function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.hero__img}/>
            <div className={style.hero__info}>
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <Decoration/>
            <div className={style.hero__buttons}>
                <Link to={'/logowanie'}>Oddaj rzeczy</Link>
                <Link to={'/logowanie'}>Zorganizuj zbiórję</Link>
            </div>
            </div>
        </section>
    );
}

export default Hero;