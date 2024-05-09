import React from "react";
import casaLola from "/Assets/mlg.jpg";

import "./SeccionRestaurante.css";

function SeccionRestaurantes() {
    return (
        <div>
            <CardRestaurante nombre="CasaLola" imagen={casaLola} descripcion="Tapas" />
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

export default SeccionRestaurantes;

