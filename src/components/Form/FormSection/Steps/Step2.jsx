import React from 'react';
import style from './Steps.module.scss'
import {updateStep} from "../../../../actions";
import {connect} from "react-redux";
import classNames from 'classnames';

function Step2({form: { trashBagsAmount }, updateStep}) {
    const handleSelect = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        updateStep({
            [name]: value
        })
    };
    console.log(trashBagsAmount);
    return (
        <div className={classNames(style.steps, style.step2)}>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className={style.step2}>
                <p>Liczba worków 60L:</p>
                <select name="trashBagsAmount" id="trashBagsAmount" onChange={e => handleSelect(e)} value={trashBagsAmount}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="more">Więcej</option>
                </select>
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        updateStep: step => dispatch(updateStep(step))
    }
}

export default connect(null, mapDispatchToProps)(Step2);