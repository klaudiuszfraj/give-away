import React from 'react';
import style from './Whowehelp.module.scss'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Option from "./Option/Option";

function WhoWeHelp() {
    return (
        <section className={style.WhoWeHelp} id={'foundation'}>
            <div className={style.WhoWeHelp__container}>
                <div className={style.WhoWeHelp__info}>
                    <h1>Komu pomagamy?</h1>
                    <Decoration/>
                    <div className={style.WhoWeHelp__options}>
                        <Option title={'Fundacją'}/>
                        <Option title={'Organizacją pozarządowym'}/>
                        <Option title={'Lokalnym zbiórką'}/>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                </div>
                <div className={style.WhoWeHelp__list}>
                    <p>lista</p>
                    <p>lista</p>
                    <p>lista</p>
                </div>

            </div>
        </section>
    );
}

export default WhoWeHelp;