import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction(" ");
  };
  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Recuerdame
            </label>
            <a href="#">¿Olvidaste la contraseña?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              ¿No tienes cuenta?{" "}
              <a href="#" onClick={registerLink}>
                Registrate
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>Registrarse</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit">Registrarse</button>

          <div className="register-link">
            <p>
              ¿Tienes una cuenta?
              <a href="#" onClick={loginLink}>
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
