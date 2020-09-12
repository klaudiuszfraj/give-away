import React, {useEffect, useState} from 'react';
import style from './Whowehelp.module.scss'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Option from "./Option/Option";
import ListItem from "./ListItem/ListItem";
import {fetchFoundationsList} from "../../../API";
import Pagination from "./Pagination/Pagination";

function WhoWeHelp() {
    const [allFoundationsList, setAllFoundationsList] = useState([]);
    const [selectedItem, setSelectedItem] = useState('Fundacjom');
    const [pagination, setPagination] = useState({
                                                                foundationList: [],
                                                                foundationType: '',
                                                                currentPage: 1,
                                                                todosPerPage: 3
                                                            });

    useEffect(() => {
        const fetchFoundations = async () => {
            const FoundationsList = await fetchFoundationsList();
            setAllFoundationsList(FoundationsList);
        }
        fetchFoundations();
    }, []);

    useEffect(() => {
        if (allFoundationsList.length !== 0) {
            const foundation = allFoundationsList.filter((item) => {
                return item.name === selectedItem;
            })
            const foundationObj = foundation[0];
            setPagination(prevState => ({
                ...prevState,
                foundationType: foundationObj.desc,
                foundationList: foundationObj.items,
                currentPage: 1
            }))
        }
    }, [selectedItem, allFoundationsList]);


    const indexOfLastTodo = pagination.currentPage * pagination.todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - pagination.todosPerPage;
    const currentList = pagination.foundationList.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
        <section className={style.WhoWeHelp} id={'foundation'}>
            <div className={style.WhoWeHelp__container}>
                <div className={style.WhoWeHelp__info}>
                    <h1>Komu pomagamy?</h1>
                    <Decoration/>
                    <div className={style.WhoWeHelp__options}>
                        <Option title={'Fundacjom'} onSetItem={setSelectedItem}/>
                        <Option title={'Organizacją pozarządowym'} onSetItem={setSelectedItem}/>
                        <Option title={'Lokalnym zbiórką'} onSetItem={setSelectedItem}/>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                </div>
                <div className={style.WhoWeHelp__list}>
                    {currentList.length && currentList.map((listItem, index)=>(
                        <ListItem key={index} type={pagination.foundationType} header={listItem.header} details={listItem.subheader} items={listItem.desc}/>
                    ))}
                </div>
                <div className={style.WhoWeHelp__pages}>
                    {pagination.todosPerPage / pagination.foundationList.length !== 1 &&
                    <Pagination postsPerPage={pagination.todosPerPage} totalPosts={pagination.foundationList.length} onChangePageNumber={setPagination}/>
                    }
                </div>

            </div>
        </section>
    );
}

export default WhoWeHelp;