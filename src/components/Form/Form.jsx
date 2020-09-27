import React from 'react';
import {Contact, Footer, FormHero, FormWarning} from "../index";

function Form() {
    return (
        <>
            <FormHero/>
            <FormWarning/>

            <section>
                <h1>form</h1>
            </section>

            <Contact/>
            <Footer/>
        </>
    );
}

export default Form;