import React, { useState } from 'react';
import "../assets/css/FormularioNegocios.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const FormularioFotosNegocio = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // Verificar si el usuario está autenticado
  if (!isLoggedIn) {
    navigate('/login');
  }

  // Control de las imágenes
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setValue('imagenes', files);
    
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
  };

  const formSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        if (key === 'imagenes') {
          data[key].forEach((file, index) => {
            formData.append(`imagenes[${index}]`, file);
          });
        } else {
          formData.append(key, data[key]);
        }
      }

      const response = await fetch('http://localhost:8000/api/upload-photos', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: formData
      });

      if (response.ok) {
        alert("Fotos subidas con éxito");
        reset();
        setPreviewImages([]);
        navigate('/');
      } else {
        console.log('Error al subir las fotos');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  });

  return (
    <section className="mainSection">
      <div className="formulario-container" id='start'>
        <form onSubmit={formSubmit}>
          <h1>Sube las fotos de tu negocio</h1>
          <div className='addImg'>
            <div className='errorBox'>
              {errors.imagen && <span className='formError'>{errors.imagen.message}</span>}
            </div>
            <input
              type="file"
              placeholder="Añade imágenes"
              accept="image/*"
              multiple
              {...register("imagenes", { required: "Debe añadir al menos una imagen" })}
              onChange={handleImagesChange}
            />
          </div>
          {errors.imagenes && <span className='formError'>{errors.imagenes.message}</span>}
          {previewImages.length > 0 && (
            <div className="images-preview">
              {previewImages.map((image, index) => (
                <img key={index} src={image} alt={`Previsualización ${index}`} style={{ maxWidth: '100%', maxHeight: '200px', margin: '5px' }} />
              ))}
            </div>
          )}
          <button type="submit">Subir Fotos</button>
          <button type="button" onClick={() => navigate('/')}>Volver a Inicio</button>
        </form>
      </div>
    </section>
  );
};

export default FormularioFotosNegocio;
