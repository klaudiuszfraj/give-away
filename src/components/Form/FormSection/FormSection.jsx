import React from 'react';
import style from './FormSection.module.scss';

function FormSection() {
    return (
        <section className={style.FormSection}>
            <div className={style.FormSection__container}>
                <h4>Krok 1/4</h4>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form action="#">
                    <div>
                        <input type="checkbox" name={'clothesToUse'}/>
                        <label htmlFor="clothesToUse">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'clothesToTrash'}/>
                        <label htmlFor="clothesToTrash">ubrania, do wyrzucenia</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'toys'}/>
                        <label htmlFor="toys">zabawki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'books'}/>
                        <label htmlFor="books">książki</label>
                    </div>
                    <div>
                        <input type="checkbox" name={'different'}/>
                        <label htmlFor="different">inne</label>
                    </div>
                </form>
                <button>Dalej</button>
            </div>
        </section>
    );
}

export default FormSection;