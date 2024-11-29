import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';

const App:React.FC = () => {
  return(
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );

};

export default App
