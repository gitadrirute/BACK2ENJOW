import React, { useState, useEffect } from "react";
import "../assets/css/SeccionRestaurantes_y_hoteles.css";
// import CasaLola from "../components/restaurante/CasaLola";
import MapCardComponent from "../components/restaurante/Mapa";

function SeccionHotel() {
  const [hotels, setHotels] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Función para obtener datos de hoteles desde la API
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/listadoHotelesTF');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de hoteles');
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error('Error al obtener la lista de hoteles:', error);
      }
    };

    fetchHotels();
  }, []);

  //!CAMBIAR LAS REDIRECCIONES AL MENU DEL NEGOCIO
  const handleRedirect = () => {
    setRedirect(true);
  };

  if (redirect) {
    return {/* <CasaLola /> */};
  }

  const sortedHotels = hotels.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.precio - b.precio;
    } else {
      return b.precio - a.precio;
    }
  });

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="containerSection" id="product">
      <div className="cards-Section">
        <h2>Hoteles</h2>
        <div className="sort-container">
          <label htmlFor="sortOrder">Ordenar por precio: </label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
        <div className="cardsContainer">
          {sortedHotels.map((hotel, index) => (
            <CardHotel
              key={hotel.id}
              nombre={hotel.nombre}
              imagen={hotel.imagen}
              precio={`${hotel.precio}€`}
              distancia={hotel.distancia}
              descuento={hotel.descuento}
              handleRedirect={handleRedirect}
            />
          ))}
        </div>
      </div>
      <div className="map-containerSection">
        <MapCardComponent />
      </div>
    </div>
  );
}

function CardHotel({ nombre, imagen, precio, distancia, descuento, handleRedirect }) {
  return (
    <div className="card" onClick={handleRedirect}>
      <div className="card-image-container">
        <img className="card-image" src={imagen} alt={nombre} />
      </div>
      <div className="card-details">
        <h2 className="card-title">
          <strong>{nombre}</strong>
        </h2>
        <p className="card-text">{precio} de precio medio</p>
        <p className="card-text">{distancia} km de Centro de la ciudad</p>
        <p className="discount-tag">{descuento}</p>
      </div>
    </div>
  );
}

export default SeccionHotel;
