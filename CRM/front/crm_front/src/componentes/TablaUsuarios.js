import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/usuarios");
        setUsuarios(response.data); // Asumiendo que la respuesta es un array de objetos de usuarios
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  const eliminarUsuario = async (id) => {
    try {
      // Aquí deberías implementar la lógica para eliminar un usuario
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
              <td>{usuario.contraseña}</td>
              <td>{usuario.validado}</td>
              <td>
              {/* <button>
                  <svg className='boton_delete' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
              </button> */}
                <button className="btn btn-danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;
