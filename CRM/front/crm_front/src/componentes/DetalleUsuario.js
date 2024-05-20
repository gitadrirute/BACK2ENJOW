import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DetalleUsuario = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [usuario, setUsuario] = useState(null); // Estado para guardar los datos del usuario
  const [error, setError] = useState(''); // Estado para manejar errores

  useEffect(() => {
    // Función para cargar los datos del usuario
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/detallesUsuario/${id}`); // Llamada a la API
        setUsuario(response.data.usuario); // Guardar los datos del usuario en el estado
      } catch (error) {
        setError('No se pudo cargar la información del usuario'); // Manejo de errores
        console.error('Error fetching data: ', error);
      }
    };

    fetchUsuario(); // Ejecutar la función al montar el componente
  }, [id]); // Dependencia del efecto para recargar cuando cambie el id

  if (error) {
    return <div>Error: {error}</div>; // Mostrar error si existe
  }

  if (!usuario) {
    return <div>Cargando...</div>; // Mensaje de carga mientras los datos no están disponibles
  }

  // Verifica la URL de la imagen en la consola
  console.log('URL de la imagen:', `http://127.0.0.1:8000${usuario.rutaImagen}`);


  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <ul>
        <li><span className="fw-bold">ID:</span> {usuario.id}</li>
        <li><span className="fw-bold">Nombre:</span> {usuario.nombre}</li>
        <li><span className="fw-bold">Apellido:</span> {usuario.apellidos}</li>
        <li><span className="fw-bold">UserName:</span> {usuario.nombreUsuario}</li>
        <li><span className="fw-bold">Validado:</span> {usuario.validado}</li>
        <li><span className="fw-bold">DNI:</span> {usuario.DNI}</li>
        <li><span className="fw-bold">Fecha de registro:</span> {usuario.fechaRegistro}</li>
        <li><span className="fw-bold">Foto Perfil:</span></li>
        {usuario.rutaImagen && (
          <img src={`http://127.0.0.1:8000${usuario.rutaImagen}`} style={{ width: '200px', height: '200px' }}  alt="Foto de Perfil" />
        )}
      </ul>
    </div>
  );
};

export default DetalleUsuario;
