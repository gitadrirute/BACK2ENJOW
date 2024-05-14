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
        const response = await axios.get(`http://localhost:8000/api/usuarios/${id}`); // Llamada a la API
        setUsuario(response.data); // Guardar los datos del usuario en el estado
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

  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Email: {usuario.email}</li>
        {/* Agrega más detalles según sea necesario */}
      </ul>
    </div>
  );
};

export default DetalleUsuario;
