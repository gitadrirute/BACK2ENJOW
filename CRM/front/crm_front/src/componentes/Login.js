import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Cambio a useNavigate

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Uso de useNavigate en lugar de useHistory

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');  // Limpiar cualquier error anterior
    try {
      const response = await axios.post('http://localhost:8000/api/loginCRM', {
        nombreRol: usuario,
        contraseña: contrasena
      });
  
      if (response.data) {
        navigate('/tablas');
      } else {
        setError('Usuario o contraseña incorrectossssssssss');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Usuario o contraseña incorrectos');
      } else {
        setError('Error de conexión con el servidor');
      }
      console.error(err);
    }
  };
  
  
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Aceptar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
