import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetalleNegocio = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [negocio, setNegocio] = useState(null); // Estado para guardar los datos del negocio
  const [error, setError] = useState(''); // Estado para manejar errores

  useEffect(() => {
    // Función para cargar los datos del negocio
    const fetchNegocio = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/negocios/${id}`); // Llamada a la API
        setNegocio(response.data); // Guardar los datos del usuario en el estado
      } catch (error) {
        setError('No se pudo cargar la información del negocio'); // Manejo de errores
        console.error('Error fetching data: ', error);
      }
    };

    fetchNegocio(); // Ejecutar la función al montar el componente
  }, [id]); // Dependencia del efecto para recargar cuando cambie el id

  if (error) {
    return <div>Error: {error}</div>; // Mostrar error si existe
  }

  if (!negocio) {
    return <div>Cargando...</div>; // Mensaje de carga mientras los datos no están disponibles
  }

  return (
    <div>
      <h1>Detalles del Negocio</h1>
      <ul>
        <li>Nombre: {negocio.nombre}</li>
        <li>NIF: {negocio.NIF}</li>
        {/* Agrega más detalles según sea necesario */}
      </ul>
    </div>
  );
};

export default DetalleNegocio;
