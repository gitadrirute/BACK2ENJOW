import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaNegocios = () => {
  const [negocios, setNegocios] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/TodosNegociosConOSinFotos");
        // Asegurarse de que se accede a la propiedad 'negocios' que es el array
        if (Array.isArray(response.data.negocios)) {
          setNegocios(response.data.negocios);  // Acceder a la propiedad 'negocios'
        } else {
          console.error('La propiedad \'negocios\' no es un arreglo:', response.data.negocios);
          setNegocios([]);  // Establece negocios como un arreglo vacío en caso de error
        }
      } catch (error) {
        console.error('Error al obtener los datos de los negocios:', error);
        setNegocios([]);  // Asegúrate de manejar errores limpiamente
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
            <th>Nombre</th>
            <th>NIF</th>
            <th>Dirección</th>
            <th>Creado por</th>
            <th>Validado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
  {negociosFiltrados.map(negocio => {
    if (!negocio.id) {
      console.warn("Negocio sin ID:", negocio);
      return null; // No renderizar este elemento si no tiene ID
    }
    return (
      <tr key={negocio.id}>
        <td>{negocio.nombre}</td>
        <td>{negocio.NIF}</td>
        <td>{negocio.direccion}</td>
        <td>{negocio.propietario}</td>
        <td>{negocio.validado}</td>
        <td>
          <button className="btn btn-danger" onClick={() => eliminarNegocio(negocio.id)}>Eliminar</button>
          <button className="btn btn-success" onClick={() => validarNegocio(negocio.id)}>
            <i className="bi bi-check-circle"></i> Validar
          </button>
        </td>
      </tr>
    );
  })}
</tbody>

      </table>
    </div>
  );
}

export default TablaNegocios;
