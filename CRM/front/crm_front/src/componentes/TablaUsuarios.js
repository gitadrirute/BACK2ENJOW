import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/UsuariosNoValidadosConFotos", {
          /* headers: {

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
          } */
        });
        setUsuarios(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);


  const eliminarUsuario = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/usuarios/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
        }
      });
      console.log(response.data);
      // Actualizar el estado o realizar otras acciones después de la eliminación
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div className="container">
      <h1>Validación de Usuarios</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Nombre Usuario</th>
            <th>DNI</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Validado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.DNI}</td>
              <td>{usuario.correo}</td>
              {/* <td>{usuario.contraseña}</td> */}
              <td>{usuario.validado}</td>
              <td>
                <button className="btn btn-delete" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;
