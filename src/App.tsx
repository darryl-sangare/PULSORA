import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Navbar from './assets/components/Navbar';
import Footerr from './assets/components/Footerr';

const App:React.FC = () => {
  return(
    <>
      <section>
        <Navbar/>
        <Header/>
        <Home/>
        <Footerr/>

      </section>

    </>
  );

};

export default App
