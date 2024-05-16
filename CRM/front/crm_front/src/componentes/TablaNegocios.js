import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate desde react-router-dom


const TablaNegocios = () => {
  const navigate = useNavigate();  // Inicializa el hook useNavigate
  const [negocios, setNegocios] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarNoValidados, setMostrarNoValidados] = useState(false);

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        let url = "http://127.0.0.1:8000/api/TodosNegociosConOSinFotos";
        if (mostrarNoValidados) {
          url = "http://127.0.0.1:8000/api/NegociosNoValidConOSinFotos";
        }
        const response = await axios.get(url);
        setNegocios(response.data.negocios || []); 
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };
    
    

    obtenerNegocios();
  }, [mostrarNoValidados]);

  
  /* Busqueda de negocios */
  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const negociosFiltrados = negocios.filter(negocio =>
    negocio.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

    /* Boton para cambiar a no validados */
    const toggleMostrarNoValidados = () => {
      setMostrarNoValidados(!mostrarNoValidados);
    };

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


    /* Ver detalles usuario */
    const verDetalles = (id) => {
      navigate(`/detallesNegocio/detalle/${id}`);
    };

  return (
    <div className="container">
      <h1>Validación de Negocios</h1>
      <button onClick={toggleMostrarNoValidados} className="btn btn-info">{mostrarNoValidados ? 'Mostrar Todos' : 'Mostrar No Validados'}</button>
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
          <button className="btn btn-primary" onClick={() => verDetalles(negocio.id)}>Ver</button>
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
