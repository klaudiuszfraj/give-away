import React from 'react';
import { Header, Hero, Stats, FourSteps, About, WhoWeHelp, Contact, Footer } from "../index";
import style from './Home.module.scss'


function Home() {
 return (
  <div className={style.home__container}>
      <Header/>
      <Hero/>
      <Stats/>
      <FourSteps/>
      <About/>
      <WhoWeHelp/>
      <Contact/>
      <Footer/>
  </div>
 );
}
export default Home;