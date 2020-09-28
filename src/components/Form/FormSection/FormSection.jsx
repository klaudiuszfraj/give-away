import React, {useState} from 'react';
import style from './FormSection.module.scss';

function FormSection() {

    const [step1, setStep1] = useState({
        clothesToUse: false,
        clothesToTrash: false,
        toys: false,
        books: false,
        different: false
    })

    const handleInputs = (event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setStep1(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok 1/4</h4>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form action="#">
                    <div>
                        <input type="checkbox" name={'clothesToUse'} id={'clothesToUse'} value={step1.clothesToUse} onClick={handleInputs}/>
                        <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'clothesToTrash'} id={'clothesToTrash'} value={step1.clothesToTrash} onClick={handleInputs}/>
                        <label htmlFor="clothesToTrash">ubrania, do wyrzucenia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'toys'} id={'toys'} value={step1.toys} onClick={handleInputs}/>
                        <label htmlFor="toys">zabawki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'books'} id={'books'} value={step1.books} onClick={handleInputs}/>
                        <label htmlFor="books">książki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'different'} id={'different'} value={step1.different} onClick={handleInputs}/>
                        <label htmlFor="different">inne</label>
                    </div>
                </form>
                <button>Dalej</button>
            </div>
        </section>
    );
}

export default FormSection;