import React from 'react';
import style from './FormWarning.module.scss'


function FormWarning() {
 return (
     <section className={style.Form__warning}>
         <h2>Ważne!</h2>
         <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
     </section>
 );
}
export default FormWarning;