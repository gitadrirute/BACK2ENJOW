import React from "react";
import casaLola from "./assets/casa.jpg";

import "./SeccionRestaurante.css";

function SeccionRestaurante() {
    return (
        <div>
            <CardRestaurante nombre="Casa Lola" imagen={casaLola} descripcion="Tapas" />
            <CardRestaurante nombre="Bocatas Juanma" imagen={casaLola} descripcion="Bocadillos" />
        </div>
    );
}

function CardRestaurante({ nombre, imagen, descripcion }) {
    return (
        <div className="card">
            <img className="card-image" src={imagen} alt={nombre} />
            <div className="card-content">
                <h2 className="card-title">{nombre}</h2>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
}

export default SeccionRestaurante;

