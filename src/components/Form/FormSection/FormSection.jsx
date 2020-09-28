import React, {useState} from 'react';
import style from './FormSection.module.scss';
import {connect} from "react-redux";
import {submitStep} from "../../../actions";
import Step1 from "./Steps/Step1";

function FormSection({form, submitStep}) {
    const [currentStep, setCurrentStep] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok {currentStep}/4</h4>
                <form action="#">
                    <Step1 form={form}/>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);