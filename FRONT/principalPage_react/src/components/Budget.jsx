import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

const Budget = () => {
    // Estado para controlar la visibilidad del formulario emergente
    const [isPopupVisible, setPopupVisible] = useState(false);

    const FormStyle ={
        display:'block'
    }
    // Función para manejar el clic en el botón y mostrar el popup
    const handleShowFormClick = () => {
        setPopupVisible(true);
    };

    // Función para manejar el cierre del popup
    const handleClosePopup = () => {
        setSuccessMessage(false)
        setPopupVisible(false);
        clearErrors();
    };

    //Validacion de formulario
    //*Uso la react-hook-form que tiene todo lo necesario par avalidar los formularios
    const {
        register,
        handleSubmit, 
        formState:{errors},
        setError,
        clearErrors,
        //watch,//sirve para interactuar en tiempo real con el form
        //setValue,
        reset
    } = useForm();

    // Estado para controlar el valor del captcha
    const [captchaValue, setCaptchaValue] = useState(null);

    //controla el mensaje de exito
    const [successMessage, setSuccessMessage] = useState(false);
    let successMsg =""
    if (successMessage) {
        successMsg = "¡¡Enviado con exito!!"
    }

    // Función para manejar el cambio de captcha
    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);

        // Si se completa el captcha, elimina el error relacionado
        if (value) {
            clearErrors('recaptcha');
        }
    };


    //controla el envio del formulario
    const formSubmit = handleSubmit((data) => {//muestra la info del formulario
        // Verificar si el captcha está seleccionado
        if (!captchaValue) {
            setError('recaptcha', { type: 'manual', message: 'Por favor, completa el captcha' });
            return; // No envía el formulario
        }

        data.recaptchaToken = captchaValue; // Incluye el token del captcha en los datos
        console.log(data);

        alert("enviando...")
        /**
         * !AQUI ES DONDE SE ENVIA LA INFO DEL FORMULARIO OJOOOOOOOOOOOOOOOO
         * * La info se guarda en data
         */
        
        reset();//Limpia el formulario
        setSuccessMessage(true)
    })
  return (
    <>
        <section className="budget" id="budget">
            <div className="budget__title">
                <h1>Da el primer paso hacia una experiencia única en Málaga</h1>
                <p>Con nuestro servicio de creación de rutas personalizadas, podrás descubrir lo mejor que Málaga tiene para ofrecer de acuerdo a tus necesidades y preferencias.</p>
                <p>No pierdas más tiempo buscando, ¡permítenos diseñar la ruta perfecta para ti!</p><br/>
                <div id="showFormBtn_2" className="buttonBox">
                    <button onClick={handleShowFormClick}>¡Obten tu ruta personalizada ahora!</button>
                </div>
            </div>
        
            <div className="budget__img">
                <img src="./img/Logos/ruta_logo.jpeg" alt="imagen" width="500px"/>
            </div>
        </section>

        {/* Solo muestra el popup si isPopupVisible es true */}
        {isPopupVisible && (
                <>
                {/* Agrega un overlay */}
                <div style={FormStyle}  id="overlay" onClick={handleClosePopup}></div>
                
                <div style={FormStyle}   id="form__Popup_2" className="popup">
                    <section className="budget__form">
                    <h2>Mejora tu experiencia con nosotros</h2>
                    <hr/><br/>
                    <form id="form_2" className="forms" onSubmit={formSubmit}>
                        {/* FULLNAME */}
                        {
                            //  el error del nombre
                            errors.fullName && <span className='formError'>{errors.fullName.message}</span>
                        }
                        <input 
                            className="input__form" type="text" 
                            id="name__budget_form" name="full_name__budget_form" 
                            placeholder="NOMBRE Y APELLIDOS*" 
                            {...register("fullName",{
                                required: {
                                    value: true,
                                    message: "¡Nombre requerido!"
                                },
                                minLength:{
                                    value: 2,
                                    message: " Nombre debe tener mínimo 2 letras "
                                }
                                }
                            )}
                            />
                            
                        {/* EMAIL */}
                        {
                            //  el error del email
                            errors.email && <span className='formError'>{errors.email.message}</span>
                        }
                        <input 
                            className="input__form" type="email" 
                            id="email__budget_form" name="email__budget_form" 
                            placeholder="CORREO *" 
                            {...register("email",{
                                required: {
                                    value:true,
                                    message: "¡Correo requerido!"
                                },
                                pattern:{
                                    value: /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                                    message:"Correo no valido"
                                }
                                
                                }
                            )}
                        />
                        {/* TELEFONO */}
                        {
                            //  el error del telefono
                            errors.tel && <span className='formError'>{errors.tel.message}</span>
                        }
                        <input 
                            className="input__form" type="tel" 
                            id="tel__budget_form" name="tel__budget_form" 
                            placeholder="TELÉFONO" 
                            {...register("tel",{
                                pattern: {
                                    value:/(\+)*[0-9][ -]*([0-9][ -]*){7,15}/,
                                    message: "¡Formato invalido para el numero de teléfono!"
                                }
                                }
                            )}
                        />
                        {/* CHECKBOXES */}
                        <label>
                            <input 
                            type="checkbox" name="budget_spam" id="budget_spam"
                            {...register("budget_spam")}
                            />
                                Acepto recibir notificaciones de nuevos productos
                        </label>   
                        <label>
                            <input 
                                type="checkbox" name="budget_terms" id="budget_terms" 
                                {...register("budget_terms",{
                                    required:{
                                        value: true,
                                        message: "Debes aceptar los terminos de privacidad para continuar"
                                    }
                                    }
                                )}
                                /> 
                                Acepto terminos de privacidad *
                                <br/>
                                {
                                //  el error de terms
                                errors.budget_terms && <span className='formError'>{errors.budget_terms.message}</span>
                                }
                        </label>
                        <br/>
                        <p className="policy_text">
                            He leído y acepto las condiciones contenidas en la <Link to="/politicaPrivacidad">Política de Privacidad</Link> sobre el 
                            tratamiento de mis datos para gestionar mi consulta o petición.
                        </p>
                        <div className="g-recaptcha" id="budget_captcha">
                            <ReCAPTCHA
                                sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                                onChange={handleCaptchaChange}
                            />
                            <br/>
                            {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}
                        </div> 
                        {successMessage 
                            ?<button id="submitBtn__budget_form" className="input__form" name="submitBtn__budget_form" type="submit">{successMsg}</button>
                            :<button id="submitBtn__budget_form" className="input__form" name="submitBtn__budget_form" type="submit">Enviar</button>}
                    </form>
                    
                    </section>
                </div>
                </>
            )}
    </>
  )
}

export default Budget