import React, {useState} from 'react';
import style from './FormSection.module.scss';
import {connect} from "react-redux";
import {submitStep} from "../../../actions";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Summary from "./Steps/Summary";

function FormSection({form, submitStep}) {
    const [currentStep, setCurrentStep] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentPage = e.target.id;


        setCurrentStep(prevState => {
            if (currentPage === 'nextPage'){
                return prevState === 5 ? 5 : prevState + 1;
            }else {
                return prevState === 1 ? 1 : prevState - 1;
            }
        })
    }

    const renderStep = (step) => {
        switch (step) {
            case 1:
                return <Step1 form={form}/>
            case 2:
                return <Step2 form={form}/>
            case 3:
                return <Step3 form={form}/>
            case 4:
                return <Step4 form={form}/>
            case 5:
                return <Summary form={form}/>
            default:
                return <Step1 form={form}/>
        }
    };
    const renderButtons = step => {
        switch (step){
            case 1:
                return <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Dalej</button>
            case 2:
            case 3:
            return <>
                <button id={'prevPage'} onClick={(e) => handleSubmit(e)}>Wstecz</button>
                <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Dalej</button>
            </>
            case 4:
                return <>
                    <button id={'prevPage'} onClick={(e) => handleSubmit(e)}>Wstecz</button>
                    <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Posdumowanie</button>
                    </>
            case 5:
                return <>
                    <button id={'prevPage'} onClick={(e) => handleSubmit(e)}>Wstecz</button>
                    <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Potwierdzam</button>
                    </>
            default:
                return <>
                    <button id={'prevPage'} onClick={(e) => handleSubmit(e)}>Wstecz</button>
                    <button id={'nextPage'} onClick={(e) => handleSubmit(e)}>Dalej</button>
                </>
        }

    }

    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok {currentStep}/4</h4>
                <form action="#">
                    {renderStep(currentStep)}

                    <div className={style.buttons}>
                        {renderButtons(currentStep)}
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