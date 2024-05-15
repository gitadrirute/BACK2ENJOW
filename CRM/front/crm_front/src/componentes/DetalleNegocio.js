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
        const response = await axios.get(`http://127.0.0.1:8000/api/detallesNegocio/${id}`); // Llamada a la API
        setNegocio(response.data.negocio); // Guardar los datos del usuario en el estado
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
        <li><span className="fw-bold">ID:</span> {negocio.id}</li>
        <li><span className="fw-bold">Nombre:</span> {negocio.nombre}</li>
        <li><span className="fw-bold">Validado:</span> {negocio.validado}</li>
        <li><span className="fw-bold">NIF:</span> {negocio.NIF}</li>
        <li><span className="fw-bold">Direccion:</span> {negocio.direccion}</li>
        <li><span className="fw-bold">Telefono:</span> {negocio.telefono}</li>
        <li><span className="fw-bold">Sitio Web:</span> {negocio.sitioWeb}</li>
        <li><span className="fw-bold">Creado por:</span> {negocio.propietario}</li>
        <li><span className="fw-bold">Categoria:</span> {negocio.categoria}</li>
        <li><span className="fw-bold">Fecha de registro:</span> {negocio.fechaRegistro}</li>
        <li><span className="fw-bold">Imágenes subidas:</span></li>
      </ul>
    </div>
  );
};

export default DetalleNegocio;
