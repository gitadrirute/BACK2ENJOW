import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaNegocios = () => {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        const response = await axios.get("https://api.example.com/negocios");
        setNegocios(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los negocios:', error);
      }
    };

    obtenerNegocios();
  }, []);

  const validarNegocio = async (id) => {
    try {
      const response = await axios.post(`https://api.example.com/negocios/${id}/validate`);
      console.log(response.data);
      // Actualizar el estado o realizar otras acciones después de la validación
    } catch (error) {
      console.error('Error al validar negocio:', error);
    }
  };

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
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {negocios.map(negocio => (
            <tr key={negocio.id}>
              <td>{negocio.id}</td>
              <td>{negocio.nombre}</td>
              <td>{negocio.direccion}</td>
              <td>
                <button className="btn btn-validate" onClick={() => validarNegocio(negocio.id)}>Validar</button>
                <button className="btn btn-delete" onClick={() => eliminarNegocio(negocio.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaNegocios;
