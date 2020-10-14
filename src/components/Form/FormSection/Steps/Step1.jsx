import React from 'react';
import style from './Steps.module.scss'
import {updateStep} from "../../../../actions";
import {connect} from "react-redux";
import classNames from 'classnames';

function Step1({form: {clothesToUse, clothesToTrash, toys, books, different}, updateStep}) {
    const handleInputs = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        updateStep({
            [name]: {
                name: name,
                isChecked: value,
                desc: target.nextSibling.innerText
            }
        })

    };
    return (
        <div className={classNames(style.steps)}>
            <h2>Zaznacz co chcesz oddać:</h2>
            <div>
                <input type="checkbox" name={'clothesToUse'} id={'clothesToUse'} value={clothesToUse.isChecked}
                       checked={clothesToUse.isChecked} onChange={handleInputs}/>
                <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
            </div>
            <div>
                <input type="checkbox" name={'clothesToTrash'} id={'clothesToTrash'} value={clothesToTrash.isChecked}
                       checked={clothesToTrash.isChecked} onChange={handleInputs}/>
                <label htmlFor="clothesToTrash">ubrania, do wyrzucenia</label>
            </div>
            <div>
                <input type="checkbox" name={'toys'} id={'toys'} value={toys.isChecked} checked={toys.isChecked}
                       onChange={handleInputs}/>
                <label htmlFor="toys">zabawki</label>
            </div>
            <div>
                <input type="checkbox" name={'books'} id={'books'} value={books.isChecked} checked={books.isChecked}
                       onChange={handleInputs}/>
                <label htmlFor="books">książki</label>
            </div>
            <div>
                <input type="checkbox" name={'different'} id={'different'} value={different.isChecked}
                       checked={different.isChecked} onChange={handleInputs}/>
                <label htmlFor="different">inne</label>
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        updateStep: step => dispatch(updateStep(step))
    }
}

export default connect(null, mapDispatchToProps)(Step1);