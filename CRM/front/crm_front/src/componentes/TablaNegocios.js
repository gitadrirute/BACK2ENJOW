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
                <button className="btn btn-validate">Validar</button>
                <button className="btn btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaNegocios;
