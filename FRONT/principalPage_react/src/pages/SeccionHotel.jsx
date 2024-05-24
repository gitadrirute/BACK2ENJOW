import React, { useState } from "react";
//!ojo cambiar las rutas 
// import "../assets/css/SeccionHotel.css"; // Cambio en la importación del archivo CSS
import CasaLola from "../components/restaurante/CasalLola"; // Cambio en la importación del componente CasaLola
import MapCardComponent from "../components/restaurante/Mapa"; // Cambio en la importación del componente MapCardComponent

function SeccionHotel() {
  const [redirect, setRedirect] = useState(false);

  // Función para manejar la redirección
  const handleRedirect = () => {
    setRedirect(true);
  };

  // Redirigir si redirect es true
  if (redirect) {
    return <CasaLola />;
  }

  return (
    <>
    
    <div className="containerSection" id="product">
      
      <div className="cards-containerSection">
        <h2>Hoteles</h2>
        <div className="cardsContainer">
          {/* CardHotel para Casa Lola */}
          <CardHotel
            nombre="Hotel ibis"
            imagen="./img/hotel/casa.jpg" // Cambio en la ruta de la imagen
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardHotel
            nombre="Hotel ibis"
            imagen="./img/hotel/casa.jpg" // Cambio en la ruta de la imagen
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardHotel
            nombre="Hotel ibis"
            imagen="./img/hotel/casa.jpg" // Cambio en la ruta de la imagen
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardHotel
            nombre="Hotel ibis"
            imagen="./img/hotel/casa.jpg" // Cambio en la ruta de la imagen
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardHotel
            nombre="Hotel ibis"
            imagen="./img/hotel/casa.jpg" // Cambio en la ruta de la imagen
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
        </div>
      </div>
      <div className="map-containerSection">
        <MapCardComponent />
      </div>
    </div>
    </>
  );
}

function CardHotel({ nombre, imagen, categoria, precio, descuento, handleRedirect }) { // Cambio en el nombre de la función y los parámetros
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

/* import React, { useState, useEffect } from 'react';

//!Esta seccion es para obtener las cartas desde la apiiii
//Np rallarse
const HotelCard = ({ hotelData }) => {
  // Renderizar la tarjeta del hotel
  return (
    <div className="hotel-card">
      <img src={hotelData.image_url} alt={hotelData.name} />
      <h2>{hotelData.name}</h2>
      <p>{hotelData.description}</p>
      <p>Ubicación: {hotelData.location}</p>
    </div>
  );
};

const SeccionHotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Función para obtener datos de hoteles desde la API
    const fetchHotels = async () => {
      try {
        // Realizar solicitud a la API para obtener la lista de hoteles
        const response = await fetch('https://tu-api.com/hotels');
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de hoteles');
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error('Error al obtener la lista de hoteles:', error);
      }
    };

    // Llamar a la función para obtener datos de hoteles cuando el componente se monte
    fetchHotels();

    // Nota: En un caso real, es posible que quieras añadir una limpieza aquí
    // para cancelar la solicitud cuando el componente se desmonte.

  }, []);

  // Renderizar la lista de hoteles
  return (
    <>
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotelData={hotel} />
      ))}
    </div>
    <div className="map-containerSection">
        <MapCardComponent/>
    </div>
    </>
  );
};

export default SeccionHotel;
 */