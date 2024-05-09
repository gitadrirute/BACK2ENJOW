import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaNegocios = () => {
  const [negocios, setNegocios] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/negocios");
        setNegocios(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los negocios:', error);
      }
    };

    obtenerNegocios();
  }, []);

  
  /* Busqueda de negocios */
  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const negociosFiltrados = negocios.filter(negocio =>
    negocio.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const eliminarNegocio = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/negocios/${id}`);
      if (response.status === 200) {
        // Eliminación exitosa, actualiza la lista de negocios
        setNegocios(negocios.filter(negocio => negocio.id !== id)); /* actualiza los negocios */
        console.log('Negocio eliminado exitosamente');
      } else {
        throw new Error('No se pudo eliminar el negocio');
      }
    } catch (error) {
      console.error('Error al eliminar negocio:', error);
    }
  };

  const validarNegocio = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/validarNegocio/${id}`);
      if (response.status === 200) {
        setNegocios(negocios.filter(negocio => negocio.id !== id));
        console.log('Negocio validado exitosamente');
      } else {
        throw new Error('No se pudo validar el negocio');
      }
    } catch (error) {
      console.error('Error al validar negocio:', error);
    }
  };

  return (
    <div className="container">
      <h1>Validación de Negocios</h1>
      <input type="text" placeholder="Buscar por nombre..." value={busqueda} onChange={handleSearchChange} className="form-control mb-3"/>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>IDNegocio</th>
            <th>Nombre</th>
            <th>CIF</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
            <th>Validado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {negociosFiltrados.map(negocio => (
            <tr key={negocio.id}>
              <td>{negocio.id}</td>
              <td>{negocio.nombre}</td>
              <td>{negocio.NIF}</td>
              <td>{negocio.direccion}</td>
              <td>{negocio.telefono}</td>
              <td>{negocio.sitioWeb}</td>
              <td>{negocio.validado}</td>
              <td>
                <button className="btn btn-danger" onClick={() => eliminarNegocio(negocio.id)}>Eliminar</button>
                <button className="btn btn-success" onClick={() => validarNegocio(negocio.id)}>
                  <i className="bi bi-check-circle"></i> Validar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaNegocios;
