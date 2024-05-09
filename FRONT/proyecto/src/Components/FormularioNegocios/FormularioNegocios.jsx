import React, { useState } from 'react';
import "./FormularioNegocios.css";

export const FormularioNegocios = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    NIF: '',
    direccion: '',
    telefono: '',
    sitioWeb: '',
    horario: '',
    informacion: '',
    ubicacion: '',
    validado: false,
    categoria_negocio_id: '',
    usuario_id: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://tu-api.com/negocios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos enviados correctamente');
      // Puedes hacer alguna acción adicional aquí, como redireccionar a una página de éxito.
    } catch (error) {
      console.error('Error:', error.message);
      // Manejar el error aquí, puedes mostrar un mensaje de error al usuario.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <h1>Sube tu negocio</h1>
        <div className="input-box">
          <input type="text" placeholder="Nombre" required name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="NIF" required name="NIF" value={formData.NIF} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Dirección" required name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Télefono" required name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Sitio Web" required name="sitioWeb" value={formData.sitioWeb} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Horario" required name="horario" value={formData.horario} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Información" required name="informacion" value={formData.informacion} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Ubicación" required name="ubicacion" value={formData.ubicacion} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Categoría Negocio" required name="categoria_negocio_id" value={formData.categoria_negocio_id} onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Usuario ID" required name="usuario_id" value={formData.usuario_id} onChange={handleChange} />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
