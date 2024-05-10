import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componentes/Login';
import Tablas from './componentes/Tablas';  // Importa el componente que combina las tablas
import './styles/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />  // Asegúrate de definir también la ruta para login
        <Route path="/tablas" element={<Tablas />} />
      </Routes>
    </Router>
  );
}

export default App;
