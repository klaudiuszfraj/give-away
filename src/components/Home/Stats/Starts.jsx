import React from 'react';
import style from './Stats.module.scss'
import StatBox from "./StatBox/StatBox";

function Starts({givenBags=10, organizations=9, collection=88}) {

    const statBoxes = [
        {
            id: 1,
            number: givenBags,
            title: 'Oddanych worków',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        },
        {
            id: 2,
            number: organizations,
            title: 'Wspartych oraganizacji',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        },
        {
            id: 3,
            number: collection,
            title: 'Zorganizowanych zbiórek',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        }
    ]


    return (
        <section className={style.stats}>
            {statBoxes.map(statBox=>(
                <StatBox key={statBox.id} title={statBox.title} number={statBox.number} text={statBox.text}/>
            ))}
        </section>
    );
}

export default Starts;