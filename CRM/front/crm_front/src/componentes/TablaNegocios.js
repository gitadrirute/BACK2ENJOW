import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaNegocios = () => {
  const [negocios, setNegocios] = useState([]);

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

  

  const eliminarNegocio = async (id) => {
    try {
      const response = await axios.delete(`https://api.example.com/negocios/${id}`);
      console.log(response.data);
      // Actualizar el estado o realizar otras acciones después de la eliminación
    } catch (error) {
      console.error('Error al eliminar negocio:', error);
    }
  };

  return (
    <div className="container">
      <h1>Validación de Negocios</h1>
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
          {negocios.map(negocio => (
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaNegocios;
