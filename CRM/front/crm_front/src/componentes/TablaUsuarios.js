import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Validación de Usuarios</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Correo</th>
            <th>Sitio Web</th>
            <th>Ciudad</th>
            <th>Teléfono</th>
            <th>Empresa</th>
            <th>Calle</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.website}</td>
              <td>{usuario.address.city}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.company.name}</td>
              <td>{usuario.address.street}</td>
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

export default TablaUsuarios;
