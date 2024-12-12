import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Navbar from './assets/components/Navbar';
import Footerr from './assets/components/Footerr';

import Articles from './assets/pages/Articles';


const App:React.FC = () => {
  return(
    <>
      <section>
      <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Header title="ACCUEIL" />
              <div><Home/></div>
              <Footerr/>
            </>
          }
        />
        
        <Route 
          path="/articles" element={<Articles />} />
        <Route
          path="/saison"
          element={
            <>
              <Header title="SAISON" />
              <div>Détails de la saison</div>
            </>
          }
        />
        <Route
          path="/equipe"
          element={
            <>
              <Header title="EQUIPE" />
              <div>Présentation de l'équipe</div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header title="CONTACT" />
              <div>Contactez-nous</div>
            </>
          }
        />
        <Route
          path="/compte"
          element={
            <>
              <Header title="COMPTE" />
              <div>Votre compte</div>
            </>
          }
        />
      </Routes>
    </Router>

      </section>

    </>
  );

};

export default App
