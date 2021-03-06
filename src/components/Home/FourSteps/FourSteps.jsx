import React from 'react';
import style from './Steps.module.scss'
import {ReactComponent as Decoration} from '../../../assets/Decoration.svg';
import StepItem from "./StepItem/StepItem";

import shirt from "../../../assets/Icon-1.svg";
import bag from "../../../assets/Icon-2.svg";
import scope from "../../../assets/Icon-3.svg";
import circle from "../../../assets/Icon-4.svg";
import {Link} from "react-router-dom";


function FourSteps() {
    const items = [
        {
            id:1,
            img: shirt,
            header: 'Wybierz rzeczy',
            text: 'ubrania zabawki sprzęt i inne'
        },
        {
            id:2,
            img: bag,
            header: 'Spakuj je',
            text: 'skorzystaj z worków na śmieci'
        },
        {
            id:3,
            img: scope,
            header: 'Zdecyduj komu chcesz pomóc',
            text: 'wybierz zaufane miejsce'
        },
        {
            id:4,
            img: circle,
            header: 'Zamów kuriera',
            text: 'kurier przyjedzie w dogodnym terminie'
        }
    ]


    return (
        <section className={style.fourSteps} id={'FourSteps'}>
            <h3 className={style.fourSteps__header}>Wystarczą 4 proste kroki</h3>
            <Decoration className={style.separator}/>
            <div className={style.items}>
                {items.map(item=>(<StepItem key={item.id} {...item}/> ))}
            </div>
            <div className={style.link}>
                <Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link>
            </div>
        </section>
    );
}

export default FourSteps;