import React, {useEffect, useState} from 'react';
import style from './Whowehelp.module.scss'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Option from "./Option/Option";
import ListItem from "./ListItem/ListItem";
import {fetchItemList} from "../../../API";

function WhoWeHelp() {
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        const fetchList = async ()=>{
            const itemList = await fetchItemList();
            setItemList(itemList);
        }
        fetchList();
    },[])



    return (
        <section className={style.WhoWeHelp} id={'foundation'}>
            <div className={style.WhoWeHelp__container}>
                <div className={style.WhoWeHelp__info}>
                    <h1>Komu pomagamy?</h1>
                    <Decoration/>
                    <div className={style.WhoWeHelp__options}>
                        <Option title={'Fundacjom'}/>
                        <Option title={'Organizacją pozarządowym'}/>
                        <Option title={'Lokalnym zbiórką'}/>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                </div>
                <div className={style.WhoWeHelp__list}>
                    <ListItem type={'Fundacja'} header={'Dbam o zdrowie'} details={'lorem lorem lorem lorem lorem lorem lorem'} items={'lorem lorem lorem lorem'}/>
                    <ListItem type={'Fundacja'} header={'Dbam o zdrowie'} details={'lorem lorem lorem lorem lorem lorem lorem'} items={'lorem lorem lorem lorem'}/>
                    <ListItem type={'Fundacja'} header={'Dbam o zdrowie'} details={'lorem lorem lorem lorem lorem lorem lorem'} items={'lorem lorem lorem lorem'}/>
                </div>
                <div className={style.WhoWeHelp__pages}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>

            </div>
        </section>
    );
}

export default WhoWeHelp;