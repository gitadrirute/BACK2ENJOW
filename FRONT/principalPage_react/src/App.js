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
import { AuthProvider, useAuth } from './components/AuthContext';
import HomeLoged from './pages/HomeLoged';
import SeccionRestaurante from './pages/SeccionRestaurante';
import CasaLola from './components/restaurante/CasalLola';

function App() {
  // Componente para mostrar contenido si esta registrado o no dependiendo del estado de autenticación
  const HomeOrDashboard = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <HomeLoged/> : <Home />;
  };
  return (
    <AuthProvider>
      <div className="App">
        <NavMenu></NavMenu>
        <GoUpBtn></GoUpBtn>
          <Routes>
            <Route path="/" element={<HomeOrDashboard/>} />

            <Route path="/avisoLegal" element={<AvisoLegal></AvisoLegal>} />
            <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politicaCookies" element={<PoliticaCookies />} />
            <Route path="/negocio" element={<FormularioNegocios />} />
            <Route path="/login" element={<LoginRegister></LoginRegister>} />
            <Route path="/restaurante" element={<SeccionRestaurante></SeccionRestaurante>} /> {/* OJO QUE HAY CONFLICTO CON EL CSS ESTE Y EL DE LA PAGINA PRINCIPAL DE RESTAURANTES */}
            {/* RUTAS PARA LA CARTA INDIVIDUAL DE RESTAURANTE/HOTEL */}
            <Route path="/Card" element={<CasaLola></CasaLola>} />
            {/* Otras rutas */}
          </Routes>
        
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
  
}

export default App;
