import React, { useState } from "react";

import "../assets/css/SeccionRestaurantes_y_hoteles.css";
import CasaLola from "../components/restaurante/CasalLola";
import MapCardComponent from "../components/restaurante/Mapa";

function SeccionRestaurante() {
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
    <div className="containerSection" id="product">
      
      <div className="cards-Section">
        <h2>Restaurantes</h2>
        <div className="cardsContainer">
          {/* CardRestaurante para Casa Lola */}
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
          <CardRestaurante
            nombre="Casa Lola"
            imagen="./img/restaurante/casa.jpg"  // Ruta relativa al directorio public
            precio="15€"
            descuento="20%"
            handleRedirect={handleRedirect}
          />
        </div>
      </div>
      <div className="map-containerSection">
          <MapCardComponent/>
      </div>
    </div>
  );
}

function CardRestaurante({ nombre, imagen, categoria, precio, descuento, handleRedirect }) {
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

export default SeccionRestaurante;