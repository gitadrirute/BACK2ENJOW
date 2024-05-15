import React, { useState } from "react";
import "../assets/css/LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";

const LoginRegister = (props) => {
  const [action, setAction] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, set_Error] = useState("");
  // Estado para controlar el valor del captcha
  const [captchaValue, setCaptchaValue] = useState(null);

  const [successMessage, setSuccessMessage] = useState(false);
  

  // Función para manejar el cambio de captcha
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);

    // Si se completa el captcha, elimina el error relacionado
    if (value) {
        clearErrors('recaptcha');
    }
  };

  //controla el mensaje de exito
  let successMsg =""
  if (successMessage) {
      successMsg = "¡¡Enviado con exito!!"
  }

  const toggleAction = () => {
    setAction(isRegistering ? "" : " active");
    setIsRegistering(!isRegistering);
  };
    //*Uso la react-hook-form que tiene todo lo necesario par avalidar los formularios
    const {
      register,
      handleSubmit, 
      formState:{errors},
      setError,
      clearErrors,
      reset
  } = useForm();

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
        body: JSON.stringify({ username, password })
      });
      
      if (response.ok) {
        props.history.push('/pasarela');
      } else {
        set_Error('Credenciales inválidas');
      }

    } catch (error) {
      set_Error('Error al iniciar sesión');
    }
  };

  //!OJO HACER QUE AL REGISTRARSE REDIRIJA A LA PAGINA PRINCIPAL CAMBIADA PARA USUARIOS REGISTRADOS
  const handleRegister = handleSubmit(async (event,data) => {
    event.preventDefault();
    // Verificar si el captcha está seleccionado
    if (!captchaValue) {
      setError('recaptcha', { type: 'manual', message: 'Por favor, completa el captcha' });
      return; // No envía el formulario
    } 

    alert("enviando...")
    data.recaptchaToken = captchaValue; // Incluye el token del captcha en los datos
  
    // const form = event.target;
    // const formData = new FormData(form);
  
    try {
      const response = await fetch('http://localhost:8000/api/usuarios/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convierte los datos a JSON
      });
  
      if (response.ok) {
        // Registro exitoso
        // Puedes redirigir a otra página o realizar alguna acción adicional
        console.log('Usuario registrado correctamente');
        alert("Enviado con éxito");
        setSuccessMessage(true)
        reset(); //Limpia el formulario después de enviar
      } else {
        // Error en el registro
        // Puedes manejar el error de acuerdo a tu lógica de aplicación
        console.error('Error al registrar usuario');
      }

    } catch (error) {
      // Error en la conexión o en el proceso de registro
      console.error('Error de conexión o en el proceso de registro:', error);
    }
  });
  

  return (
    <>
      <section className="mainSection">
        <div className={`wrapper${action}`}>
          <div className="form-box login">
          <form onSubmit={handleLogin} style={{ display: isRegistering ? "none" : "block" }}>
              <h1>Login</h1>     
              <div className="input-box">
                <input type="text" placeholder="Usuario" required name="nombreUsuario"/>
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
                <a href="/">¿Olvidaste la contraseña?</a>
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

        {/* //*Registrarse ---------------------------- */}
          <div className="form-box register">
          <form onSubmit={handleRegister} className={isRegistering ? "register-form" : ""} style={{ display: isRegistering ? "block" : "none" }}>
              <h1>Registrarse</h1>
              <div className="input-box">
                {/* feedback al usuario */}
                {errors.nombre 
                  ? <span className='formError'>{errors.nombre.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Nombre"
                 name="nombre" 
                 {...register("nombre",{
                      required: {
                        value: true,
                        message: "El campo nombre es obligatorio"
                      },
                      maxLength: {
                          value: 30,
                          message: "El campo nombre no puede tener mas de 30 caracteres"
                      },
                      minLength: {
                        value: 2,
                        message: "El campo nombre no puede tener menos de 2 caracteres"
                      },
                      pattern: {
                        value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                        message: "El campo nombre no puede contener caracteres especiales"
                      }
                    })
                  }/>
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.apellidos 
                  ? <span className='formError'>{errors.apellidos.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Apellidos" name="apellidos" 
                {...register("apellidos",{
                    required: {
                      value: true,
                      message: "El campo apellidos  es obligatorio"
                    },
                    maxLength: {
                        value: 40,
                        message: "El campo apellidos  no puede tener mas de 30 caracteres"
                    },
                    minLength: {
                      value: 2,
                      message: "El campo apellidos  no puede tener menos de 2 caracteres"
                    },
                    pattern: {
                        value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                        message: "El campo apellidos  no puede contener caracteres especiales"
                    }
                  })
                }/>
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.nombreUsuario 
                  ? <span className='formError'>{errors.nombreUsuario.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Usuario" 
                name="nombreUsuario" 
                {...register("nombreUsuario",{//implementar lo de unique(no se como va jeje)
                    required: {
                      value: true,
                      message: "El campo 'nombreUsuario  es obligatorio"
                    },
                    maxLength: {
                        value: 13,
                        message: "El campo 'nombreUsuario  no puede tener mas de 13 caracteres"
                    },
                    minLength: {
                      value: 5,
                      message: "El campo 'nombreUsuario  no puede tener menos de 5 caracteres"
                    },
                    pattern: {
                        value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                        message: "El campo 'nombreUsuario  no puede contener caracteres especiales"
                    }
                  })
                }/>
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.dni 
                  ? <span className='formError'>{errors.dni.message}</span>
                  : <span></span>}
                <input type="text" placeholder="DNI" 
                name="DNI" 
                {...register("dni",{//implementar lo de unique(no se como va jeje)
                    required: {
                      value: true,
                      message: "El campo 'DNI  es obligatorio"
                    },
                    maxLength: {
                        value: 9,
                        message: 'El DNI debe de tener 9 caracteres'
                    },
                    pattern: {
                        value: /^[0-9]{8}[A-Z]$/,
                        message: "El DNI debe de tener el formato correcto"
                    }
                  })
                }/>
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.correo 
                  ? <span className='formError'>{errors.correo.message}</span>
                  : <span></span>}
                <input type="email" placeholder="Email" name="correo"
                  {...register("correo",{//implementar lo de unique(no se como va jeje)
                      required: {
                        value:true,
                        message: 'El campo correo es obligatorio'
                      },
                      maxLength: {
                        value: 35,
                        message: "El campo correo supera el límite máximo de caracteres: 35"
                      },
                      minLength: {
                        value: 13,
                        message: "El campo correo no supera el mínimo de caracteres: 13"
                      },
                      pattern:{
                        value: /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                        message:"El correo debe de tener el formato correcto"
                      }
                    })
                  } /> 
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                {errors.contraseña 
                  ? <span className='formError'>{errors.contraseña.message}</span>
                  : <span></span>}
                <input type="password" placeholder="Contraseña" name="contraseña"
                 {...register("contraseña",{//implementar lo de unique(no se como va jeje)
                      required: {
                        value:true,
                        message: 'El campo contraseña es obligatorio'
                      },
                      maxLength: {
                        value: 30,
                        message: "El campo contraseña no puede tener mas de 30 caracteres"
                      },
                      minLength: {
                        value: 8,
                        message: "El campo contraseña no puede tener menos de 8 caracteres"
                      },
                      pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,30}/,
                        message:"La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
                      }
                    })
                  } />
                <FaLock className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Repetir contraseña" required name="contraseña_confirmation" />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                {errors.privacidad 
                  ? <span className='formError'>{errors.privacidad.message}</span>
                  : <span></span>}
                <label>
                  <input 
                  type="checkbox"
                  {...register("privacidad",{
                          required: {
                            value:true,
                            message: "Debes aceptar los terminos de privacidad"
                          }
                        })
                      }/>
                  Acepto los términos y condiciones
                </label>
              </div>
              {/* Captcha */}
              <div className="g-recaptcha">
                  <ReCAPTCHA
                    sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                    onChange={handleCaptchaChange}
                  />
                  {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}
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
      </section>
    </>
  );
};

export default LoginRegister;
