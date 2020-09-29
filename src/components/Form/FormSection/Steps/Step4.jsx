import React from 'react';
import style from './Steps.module.scss'
import {updateStep} from "../../../../actions";
import {connect} from "react-redux";

function Step4({form: {date, hour, messageForCourier, street, city, postcode, mobile}, updateStep}) {
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
            <div className={style.step4__container}>
            <div className={style.step4}>
                <p>Adres odbioru:</p>
                <div>
                    <input id={'street'} name={'street'} type="text" value={street} checked={street}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="street">Ulica</label>
                </div>
                <div>
                    <input id={'city'} name={'city'} type="text" value={city} checked={city}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="city">Miasto</label>
                </div>
                <div>
                    <input id={'postcode'} name={'postcode'} type="text" value={postcode} checked={postcode}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="postcode">Kod pocztowy</label>
                </div>
                <div>
                    <input id={'mobile'} name={'mobile'} type="text" value={mobile} checked={mobile}
                           onChange={e => handleSelect(e)}/>
                    <label htmlFor="mobile">Numer telefonu</label>
                </div>
            </div>
            <div className={style.step4}>
                <p>Termin odioru:</p>
                <div>
                <input id={'date'} name={'date'} type="text" value={date} checked={date}
                       onChange={e => handleSelect(e)}/>
                <label htmlFor="date">Data</label>
                </div>
                <div>
                <input id={'hour'} name={'hour'} type="text" value={hour} checked={hour}
                       onChange={e => handleSelect(e)}/>
                <label htmlFor="hour">Godzina</label>
                </div>
                <div>
                <input id={'messageForCourier'} name={'messageForCourier'} type="text"
                       value={messageForCourier} checked={messageForCourier} onChange={e => handleSelect(e)}/>
                <label htmlFor="messageForCourier">Wiadomość dla kuriera</label>
                </div>
            </div>
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