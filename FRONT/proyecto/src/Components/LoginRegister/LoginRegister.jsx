import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = (props) => {
  const [action, setAction] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const toggleAction = () => {
    setAction(isRegistering ? "" : " active");
    setIsRegistering(!isRegistering);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch('URL_DE_TU_API/iniciar-sesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        props.history.push('/pasarela');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (error) {
      setError('Error al iniciar sesión');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch('URL_DE_TU_API/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      if (response.ok) {
        // Si el registro es exitoso, cambia al formulario de inicio de sesión
        toggleAction();
      } else {
        setError('Error en el registro');
      }
    } catch (error) {
      setError('Error en el registro');
    }
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin} style={{ display: isRegistering ? "none" : "block" }}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required name="username" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required name="password" />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Recuérdame
            </label>
            <a href="#">¿Olvidaste la contraseña?</a>
          </div>

          <button type="submit">Login</button>
          <p>{error}</p>

          <div className="register-link">
            <p>
              ¿No tienes cuenta?{" "}
              <a href="#" onClick={toggleAction}>
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegister} style={{ display: isRegistering ? "block" : "none" }}>
          <h1>Registrarse</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required name="username" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required name="email" />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required name="password" />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit">Registrarse</button>
          <p>{error}</p>

          <div className="register-link">
            <p>
              ¿Tienes una cuenta?
              <a href="#" onClick={toggleAction}>
                Iniciar sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
