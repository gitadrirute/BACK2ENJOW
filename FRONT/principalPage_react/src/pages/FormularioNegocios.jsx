import React, { useState } from 'react';
import "../assets/css/FormularioNegocios.css";
import { useForm } from 'react-hook-form';

export const FormularioNegocios = () => {
  // const [formData, setFormData] = useState({
  //   nombre: '',
  //   NIF: '',
  //   direccion: '',
  //   telefono: '',
  //   sitioWeb: '',
  //   horario: '',
  //   informacion: '',
  //   ubicacion: '',
  //   validado: false,
  //   categoria_negocio_id: '',
  //   usuario_id: ''
  // });

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //   };

  /* 
  //*Puede servir para interacuar con el select de negocio
  const [categoriaNegocio, setCategoriaNegocio] = useState('');

  const handleChange = (event) => {
    setCategoriaNegocio(event.target.value);
  };
  */
  const {
    register,
    handleSubmit, 
    formState:{errors},
    setError,
    clearErrors,
    reset
  } = useForm();
  
  const [successMessage, setSuccessMessage] = useState(false);

  //controla el mensaje de exito
  let successMsg =""
  if (successMessage) {
      successMsg = "¡¡Enviado con exito!!"
  }
  const formSubmit = handleSubmit( async (e,data) => {
    e.preventDefault();

    try {
      const response = await fetch('http://tu-api.com/negocios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
        console.log('Error al registrar usuario');
      }

      console.log('Datos enviados correctamente');
      // Puedes hacer alguna acción adicional aquí, como redireccionar a una página de éxito.
    } catch (error) {
      console.log('Error:', error.message);
      // Manejar el error aquí, puedes mostrar un mensaje de error al usuario.
    }
  });

  

  return (
    <>
      <>
        <section className="mainSection">
          <div className="formulario-container" id='start'>
            <form onSubmit={formSubmit}>
              <h1>Sube tu negocio</h1>
              <div className="input-box">
                {errors.nombre 
                  ? <span className='formError'>{errors.nombre.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Nombre" name="nombre"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "El campo nombre es obligatorio"
                    },
                    maxLength: {
                        value: 50,
                        message: "El campo nombre no puede tener mas de 50 caracteres"
                    },
                    minLength: {
                      value: 2,
                      message: "El campo nombre no puede tener menos de 2 caracteres"
                    }
                  })}/>
              </div>
              <div className="input-box">
                {errors.nif 
                  ? <span className='formError'>{errors.nif.message}</span>
                  : <span></span>}
                <input type="text" placeholder="NIF"  name="NIF"
                  {...register("nif", {
                    required: {
                      value: true,
                      message: "El campo NIF es obligatorio"
                    },
                    maxLength: {
                        value: 30,
                        message: "El campo NIF no puede tener mas de 30 caracteres"
                    },
                    minLength: {
                      value: 2,
                      message: "El campo NIF no puede tener menos de 2 caracteres"
                    },
                    pattern: {
                      value: /(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)?[0-9A-Z]|\d{8}(-|\.)?[A-Z])$/,
                      message: "El campo NIF debe de seguir el formato"
                    }
                  })}/>
              </div>
              <div className="input-box">
                {errors.nif 
                  ? <span className='formError'>{errors.nif.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Dirección" name="direccion"
                {...register("nif", {
                  required: {
                    value: true,
                    message: "El campo NIF es obligatorio"
                  },
                  maxLength: {
                      value: 30,
                      message: "El campo NIF no puede tener mas de 30 caracteres"
                  },
                  minLength: {
                    value: 2,
                    message: "El campo NIF no puede tener menos de 2 caracteres"
                  },
                  pattern: {
                    value: /(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)?[0-9A-Z]|\d{8}(-|\.)?[A-Z])$/,
                    message: "El campo NIF debe de seguir el formato"
                  }
                })}/>
              </div>
              <div className="input-box">
                {errors.telefono 
                  ? <span className='formError'>{errors.telefono.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Télefono" name="telefono"
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "El campo telefono es obligatorio"
                  },
                  maxLength: {
                      value: 16,
                      message: "El campo telefono no puede tener mas de 16 caracteres"
                  },
                  minLength: {
                    value: 8,
                    message: "El campo telefono no puede tener menos de 8 caracteres"
                  },
                  pattern: {
                    value: /(\+)*[0-9][ -]*([0-9][ -]*){9,15}/,
                    message: "El campo 'telefono debe de seguir el formato"
                  }
                })}/>
              </div>
              <div className="input-box">
                {errors.sitioWeb 
                    ? <span className='formError'>{errors.sitioWeb.message}</span>
                    : <span></span>}
                <input type="text" placeholder="Sitio Web" name="sitioWeb"
                {...register("sitioWeb", {
                  required: {
                    value: true,
                    message: "El campo sitio Web es obligatorio"
                  },
                  maxLength: {
                      value: 120,
                      message: "El campo sitio Web no puede tener mas de 120 caracteres"
                  },
                  minLength: {
                    value: 2,
                    message: "El campo sitio Web no puede tener menos de 2 caracteres"
                  },
                  pattern: {
                    // http://www.google.com este formato.
                    value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
                    message: "El campo sitio web debe contener una URL válida"
                  }
                })}/>
              </div>
              {/* //really?
              <div className="input-box">
                <input type="text" placeholder="Horario" name="horario"/>
              </div> */}
              <div className="input-box">
                <input type="text" placeholder="Información" name="informacion"
                {...register("informacion", {
                  maxLength: {
                      value: 300,
                      message: "El campo sitio Web no puede tener mas de 300 caracteres"
                  },
                  minLength: {
                    value: 2,
                    message: "El campo sitio Web no puede tener menos de 2 caracteres"
                  }
                })}/>
                
              </div>
              <div className="input-box">{/* Podria ser mejor poner la calle y obtener coordenadas por google maps */}
                {errors.ubicacion 
                  ? <span className='formError'>{errors.ubicacion.message}</span>
                  : <span></span>}
                <input type="text" placeholder="Ubicación" name="ubicacion"
                {...register("ubicacion", {
                  required: {
                    value: true,
                    message: "El campo ubicacion es obligatorio"
                  },
                  pattern: {
                    
                    value: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
                    message: "La ubicación debe estar en formato de coordenadas geográficas (latitud, longitud)"
                  }
                })}/>
              </div>
              <div className="input-box">
                <select
                  /* value={categoriaNegocio}
                  onChange={handleChange} */
                  name="categoria_negocio_id"
                >
                  <option value="">Selecciona una categoría de negocio</option>
                  <option value="1">Restaurante</option>
                  <option value="2">Hotel</option>
                  <option value="3">Categoría 3</option>
                </select>
              </div>

              {/* <div className="input-box">
                <input type="text" placeholder="Usuario ID" name="usuario_id" value={formData.usuario_id} onChange={handleChange} />
              </div> */}

              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </>
    </>
  )
}
