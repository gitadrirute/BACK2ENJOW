import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GoUpBtn from './components/GoUpBtn';
import { NavMenu } from './components/NavMenu';
import AvisoLegal from './pages/AvisoLegal';
import Home from './pages/Home';
import PoliticaCookies from './pages/PoliticaCookies';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Footer from './components/Footer';
import { FormularioNegocios } from './pages/FormularioNegocios';
import LoginRegister from './pages/LoginRegister';
import { AuthProvider, useAuth } from './components/AuthContext';
import HomeLoged from './pages/HomeLoged';
import SeccionRestaurante from './pages/SeccionRestaurante';
import CasaLola from './components/restaurante/CasalLola';
import CodigoDescuento from './components/restaurante/CodigoDescuento'; // Importa el componente
import './assets/css/GenerarCodigo.css'; // Importa el archivo CSS

function App() {
  // Componente para mostrar contenido si está registrado o no dependiendo del estado de autenticación
  const HomeOrDashboard = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <HomeLoged /> : <Home />;
  };

  return (
    <AuthProvider>
      <div className="App">
        <NavMenu />
        <GoUpBtn />
        <Routes>
          <Route path="/" element={<HomeOrDashboard />} />
          <Route path="/avisoLegal" element={<AvisoLegal />} />
          <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politicaCookies" element={<PoliticaCookies />} />
          <Route path="/negocio" element={<FormularioNegocios />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/restaurante" element={<SeccionRestaurante />} />
          {/* Ruta para el generador de código de descuento */}
          <Route path="/generador-codigo" element={<CodigoDescuento />} />
          <Route path="/Card" element={<CasaLola />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
