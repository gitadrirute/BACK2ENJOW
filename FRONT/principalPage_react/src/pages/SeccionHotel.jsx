import React, { useState, useEffect } from "react";
import "../assets/css/SeccionRestaurantes_y_hoteles.css";
// import CasaLola from "../components/restaurante/CasaLola";
import MapCardComponent from "../components/restaurante/Mapa";

function SeccionHotel() {
  const [hotels, setHotels] = useState([]);
  const [precioSortOrder, setPrecioSortOrder] = useState('asc');
  const [descuentoSortOrder, setDescuentoSortOrder] = useState('asc');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/listadoHotelesTF");
        const data = await response.json();
        console.log(data); // Verificar los datos recibidos
        if (Array.isArray(data.hoteles)) {
          setHotels(data.hoteles);
        } else {
          console.error("Error: La propiedad 'hoteles' no es un array", data);
        }
      } catch (error) {
        console.log("Error al obtener los datos de la API", error);
      }
    };

    fetchData();
  }, []);

  // Función para manejar la redirección
  const handleRedirect = () => {
    setRedirect(true);
  };

  // Redirigir si redirect es true
  if (redirect) {
    return {/* <CasaLola /> */};
  }

  // Función para manejar el cambio de orden en el selector de precio
  const handlePrecioSortChange = (event) => {
    setPrecioSortOrder(event.target.value);
  };

  // Función para manejar el cambio de orden en el selector de descuento
  const handleDescuentoSortChange = (event) => {
    setDescuentoSortOrder(event.target.value);
  };

  // Función para ordenar tus elementos según los selectores
  const sortedHotels = () => {
    if (!Array.isArray(hotels)) {
      console.error('Error: hotels is not an array', hotels);
      return [];
    }
    
    let sorted = [...hotels]; // Hacer una copia de la lista de hoteles
    
    // Ordenar por precio y luego por descuento
    sorted.sort((a, b) => {
      if (precioSortOrder === 'asc') {
        if (a.precio !== b.precio) {
          return a.precio - b.precio;
        } else {
          return a.descuento - b.descuento;
        }
      } else {
        if (a.precio !== b.precio) {
          return b.precio - a.precio;
        } else {
          return b.descuento - a.descuento;
        }
      }
    });

    return sorted;
  };

  return (
    <div className="containerSection" id="product">
      
      <div className="cards-Section">
        <h2>Hoteles</h2>
        <div className="sort-container">
          <label htmlFor="sortOrder">Ordenar por precio: </label>
          <select id="sortPrice" value={precioSortOrder} onChange={handlePrecioSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
          <label htmlFor="sortOrder">Ordenar por descuento: </label>
          <select id="sortDiscount" value={descuentoSortOrder} onChange={handleDescuentoSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
        <div className="cardsContainer">
        {sortedHotels().map((hotel, index) => (
            <CardHotel
              key={index}
              nombre={hotel.nombre}
              imagen={hotel.rutaImagen || "./venta.jpg"} // Usa una imagen por defecto si no hay imagen
              precio={`${hotel.precio ? hotel.precio : 'N/A'}€`}
              descuento={`${hotel.descuento ? hotel.descuento : '0'}%`}
              handleRedirect={handleRedirect}
            />
          ))}
        </div>
      </div>
      <div className="map-containerSection">
        <MapCardComponent/>
      </div>
    </div>
  );
}

function CardHotel({ nombre, imagen, categoria, precio, descuento, handleRedirect }) {
  return (
    <div className="card" onClick={handleRedirect}>
      <div className="card-image-container">
        <img className="card-image" src={imagen} alt={nombre} />
      </div>
      <div className="card-details">
        <div className="card-category">{categoria}</div>
        <h2 className="card-title">
          <strong>{nombre}</strong>
        </h2>
        <p className="card-text">{precio} de precio medio</p>
        <p className="discount-tag">{descuento}</p>
      </div>
    </div>
  );
}

export default SeccionHotel;
