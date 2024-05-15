import React from 'react';

import GoUpBtn from './components/GoUpBtn';
import { NavMenu } from './components/NavMenu';
import { Route, Routes } from 'react-router-dom';
import AvisoLegal from './pages/AvisoLegal';
import Home from './pages/Home';
import PoliticaCookies from './pages/PoliticaCookies';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';

import Footer from './components/Footer'
import {FormularioNegocios}  from './pages/FormularioNegocios';
import  LoginRegister  from './pages/LoginRegister';
import SeccionRestaurante from './pages/SeccionRestaurante';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <GoUpBtn></GoUpBtn>
        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route path="/avisoLegal" element={<AvisoLegal></AvisoLegal>} />
          <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politicaCookies" element={<PoliticaCookies />} />
          <Route path="/negocio" element={<FormularioNegocios />} />
          <Route path="/login" element={<LoginRegister></LoginRegister>} />
          <Route path="/restaurante" element={<SeccionRestaurante></SeccionRestaurante>} />
          {/* Otras rutas */}
        </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
