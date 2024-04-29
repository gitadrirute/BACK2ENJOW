import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaNegocios = () => {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setNegocios(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los negocios:', error);
      }
    };

    obtenerNegocios();
  }, []);

  const validarNegocio = async (id) => {
    try {
      const response = await axios.post(`https://tudominio.com/api/negocios/${id}/validate`);
      console.log(response.data);
      // Actualizar el estado o realizar otras acciones después de la validación
    } catch (error) {
      console.error('Error al validar negocio:', error);
    }
  };

  const eliminarNegocio = async (id) => {
    try {
      const response = await axios.delete(`https://tudominio.com/api/negocios/${id}`);
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
            <th>Foto</th>
            <th>Horario</th>
            <th>Información</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {negocios.map(negocio => (
            <tr key={negocio.id}>
              <td>{negocio.id}</td>
              <td>{negocio.title}</td>
              <td>{negocio.body}</td>
              <td>...</td> {/* Aquí puedes mostrar más campos si están disponibles */}
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
