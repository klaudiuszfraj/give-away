import React, {useState} from 'react';
import style from './Stats.module.scss'

function Starts() {
    const [givenBags, setGivenBags] = useState('10');
    const [organizations, setOrganizations] = useState('10');
    const [collection, setCollection] = useState('10');


    return (
        <section className={style.stats}>
            <div>
                <h1>{givenBags}</h1>
                <h2>Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div>
                <h1>{organizations}</h1>
                <h2>Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div>
                <h1>{collection}</h1>
                <h2>Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>


        </section>
    );
}

export default Starts;