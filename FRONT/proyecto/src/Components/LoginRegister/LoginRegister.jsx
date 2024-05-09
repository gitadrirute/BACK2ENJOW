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
      const response = await fetch('http://localhost:8000/api/usuarios/', {
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

  const handleRegister = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('http://localhost:8000/api/usuarios/', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        // Registro exitoso
        // Puedes redirigir a otra página o realizar alguna acción adicional
        console.log('Usuario registrado correctamente');
      } else {
        // Error en el registro
        // Puedes manejar el error de acuerdo a tu lógica de aplicación
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      // Error en la conexión o en el proceso de registro
      console.error('Error de conexión o en el proceso de registro:', error);
    }
  };
  

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
      <form onSubmit={handleLogin} style={{ display: isRegistering ? "none" : "block" }}>
          <h1>Login</h1>     
          <div className="input-box">
            <input type="text" placeholder="Usuario" required name="nombreUsuario" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required name="contraseña" />
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
      <form onSubmit={handleRegister} className={isRegistering ? "register-form" : ""} style={{ display: isRegistering ? "block" : "none" }}>
          <h1>Registrarse</h1>
          <div className="input-box">
            <input type="text" placeholder="Nombre" required name="nombre" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Apellidos" required name="apellidos" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required name="nombreUsuario" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="DNI" required name="DNI" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required name="correo" />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required name="contraseña" />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Repetir contraseña" required name="contraseña_confirmation" />
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
