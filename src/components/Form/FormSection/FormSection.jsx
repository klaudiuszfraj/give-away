import React, {useState} from 'react';
import style from './FormSection.module.scss';
import {connect} from "react-redux";
import {submitStep} from "../../../actions";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

function FormSection({form, submitStep}) {
    const [currentStep, setCurrentStep] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentPage = e.target.id;


        setCurrentStep(prevState => {
            if (currentPage === 'nextPage'){
                return prevState === 4 ? 4 : prevState + 1;
            }else {
                return prevState === 1 ? 1 : prevState - 1;
            }
        })
    }

    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok {currentStep}/4</h4>
                <form action="#">
                    {/*<Step1 form={form}/>*/}
                    <Step2 form={form}/>

                    <div className={style.buttons}>
                        <button id={'prevPage'} onClick={(e) => handleSubmit(e)}>Wstecz</button>
                        <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Dalej</button>
                    </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);