import React, {useState, useEffect} from 'react';
import style from './FormSection.module.scss';
import {connect} from "react-redux";
import {submitStep, updateStep} from "../../../actions";

function FormSection({form: {clothesToUse, clothesToTrash, toys, books, different}, submitStep, updateStep}) {
    const [currentStep, setCurrentStep] = useState(1)
    // const [step1, setStep1] = useState({
    //     clothesToUse: false,
    //     clothesToTrash: false,
    //     toys: false,
    //     books: false,
    //     different: false
    // })


    const handleInputs = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        updateStep({
            [name]: value
        })

        // setStep1(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }))


    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok {currentStep}/4</h4>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form action="#">
                    <div>
                        <input type="checkbox" name={'clothesToUse'} id={'clothesToUse'} value={clothesToUse}
                               checked={clothesToUse} onClick={handleInputs}/>
                        <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'clothesToTrash'} id={'clothesToTrash'} value={clothesToTrash}
                               checked={clothesToTrash} onClick={handleInputs}/>
                        <label htmlFor="clothesToTrash">ubrania, do wyrzucenia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'toys'} id={'toys'} value={toys} checked={toys}
                               onClick={handleInputs}/>
                        <label htmlFor="toys">zabawki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'books'} id={'books'} value={books} checked={books}
                               onClick={handleInputs}/>
                        <label htmlFor="books">książki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'different'} id={'different'} value={different}
                               checked={different} onClick={handleInputs}/>
                        <label htmlFor="different">inne</label>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>Dalej</button>
                </form>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        submitStep: step => dispatch(submitStep(step)),
        updateStep: step => dispatch(updateStep(step))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);