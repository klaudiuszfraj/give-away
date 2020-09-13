import React, {useState} from 'react';
import {Header} from "../index";
import style from './Registration.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import classNames from "classnames";
import {Link} from "react-router-dom";

function Registration() {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [password2, setPassword2] = useState('')
 const [errors, setErrors] = useState({
  email: false,
  password: false,
  password2: false,
  success: false
 })
 const handleSubmit = (e)=>{
  e.preventDefault();
  function validateEmail(email) {
   if (email === ''){
    return false
   }
   const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
   return re.test(String(email).toLowerCase());
  }
  function validatePassword(password){
   if (password === '' || password.length < 6){
    return false
   }
   const re = /^[A-Za-z]*$/;
   return re.test(String(password))
  }
  setErrors({
   email: !validateEmail(email),
   password: !validatePassword(password),
   password2: !validatePassword(password2),
   success: false
  })


 }



 return (
        <>
         <Header/>
         <main className={style.Registration}>
          <div className={style.Registration__container}>
           <h1>Załóż konto</h1>
           <Decoration/>
           <form action="" onSubmit={e=>handleSubmit(e)}>
            <div className={style.Registration__inputs}>
             <label htmlFor="email">Email</label>
             <input type="text" id={'email'} value={email} onChange={e=>setEmail(e.target.value)}/>
             <small className={classNames({'error':errors.email})}>Podany email jest niepoprawny</small>

             <label htmlFor="password">Hasło</label>
             <input type="password" id={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>
             <small className={classNames({'error': errors.password})}>Podane hasło jest niepoprawne</small>

             <label htmlFor="password2">Powtórz hasło</label>
             <input type="password" id={'password2'} value={password2} onChange={e=>setPassword2(e.target.value)}/>
             <small className={classNames({'error': errors.password2})}>Podane hasło jest niepoprawne</small>
            </div>
            <div className={style.Registration__btns}>
             <Link to={'/rejestracja'}>Załóż konto</Link>
             <button>Zaloguj się</button>
            </div>
           </form>
          </div>
         </main>
        </>
    );
}

export default Registration;