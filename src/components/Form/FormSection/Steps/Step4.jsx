import React from 'react';
import style from './Steps.module.scss'
import {updateStep} from "../../../../actions";
import {connect} from "react-redux";

function Step4({form: { date, hour, messageForCourier, street, city, postcode, mobile }, updateStep}) {
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
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera:</h2>
            <div>
                <p>Adres odbioru:</p>

                <input id={'street'} name={'street'} type="text" value={street} checked={street} onChange={e => handleSelect(e)}/>
                <label htmlFor="street">Ulica</label>

                <input id={'city'} name={'city'} type="text" value={city} checked={city} onChange={e => handleSelect(e)}/>
                <label htmlFor="city">Miasto</label>

                <input id={'postcode'} name={'postcode'} type="text" value={postcode} checked={postcode} onChange={e => handleSelect(e)}/>
                <label htmlFor="postcode">Kod pocztowy</label>

                <input id={'mobile'} name={'mobile'} type="text" value={mobile} checked={mobile} onChange={e => handleSelect(e)}/>
                <label htmlFor="mobile">Numer telefonu</label>

            </div>
            <div className={style.step3}>
                <p>Termin odioru:</p>
                <input id={'date'} name={'date'} type="text" value={date} checked={date} onChange={e => handleSelect(e)}/>
                <label htmlFor="date">Data</label>

                <input id={'hour'} name={'hour'} type="text" value={hour} checked={hour} onChange={e => handleSelect(e)}/>
                <label htmlFor="hour">Godzina</label>

                <input id={'messageForCourier'} name={'messageForCourier'} type="messageForCourier" value={messageForCourier} checked={messageForCourier} onChange={e => handleSelect(e)}/>
                <label htmlFor="messageForCourier">Wiadomośc dla kuriera</label>


            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        updateStep: step => dispatch(updateStep(step))
    }
}

export default connect(null, mapDispatchToProps)(Step4);