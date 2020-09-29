import React from 'react';
import style from './Steps.module.scss'
import {updateStep} from "../../../../actions";
import {connect} from "react-redux";

function Step3({form: {localization, kids, singleMothers, homeless, disabled, elderly, userOrganization}, updateStep}) {
    const handleSelect = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        updateStep({
            [name]: value
        })
    };
    //todo:: urzyć mapy
    return (
        <div className={style.steps}>
            <h2>Lokalizacja:</h2>
            <select name="localization" id="localization" onChange={e => handleSelect(e)} value={localization}>
                <option value="krakow">Kraków</option>
                <option value="warszaw">Warszaw</option>
                <option value="lodz">Łódź</option>
                <option value="wroclaw">Wrocław</option>
            </select>
            <div className={style.step3}>
                <p>Komu chcesz pomóc?</p>
                <div>
                    <input id={'kids'} name={'kids'} type="checkbox" value={kids} checked={kids}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="kids">dzieciom</label>
                </div>
                <div>
                    <input id={'singleMothers'} name={'singleMothers'} type="checkbox" value={singleMothers}
                           checked={singleMothers} onChange={e => handleSelect(e)}/>
                    <label htmlFor="singleMothers">samotnym matkom</label>
                </div>
                <div>
                    <input id={'homeless'} name={'homeless'} type="checkbox" value={homeless} checked={homeless}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="homeless">bezdomnym</label>
                </div>
                <div>
                    <input id={'disabled'} name={'disabled'} type="checkbox" value={disabled} checked={disabled}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="disabled">niepełnosprawnym</label>
                </div>
                <div>
                    <input id={'elderly'} name={'elderly'} type="checkbox" value={elderly} checked={elderly}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="elderly">osobom starszym</label>
                </div>


            </div>
            <div>
                <label htmlFor="userOrganization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input id={'userOrganization'} name={'userOrganization'} value={userOrganization} type="text"
                       onChange={e => handleSelect(e)}/>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        updateStep: step => dispatch(updateStep(step))
    }
}

export default connect(null, mapDispatchToProps)(Step3);