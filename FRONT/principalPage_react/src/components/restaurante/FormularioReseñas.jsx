import React, { useState } from 'react';
import Rating from './Rating';
import "../../assets/css/FormularioReseñas.css";

function FormularioReseñas() {
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('url_de_tu_api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rating, comment }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la reseña');
            }

            console.log('Reseña enviada correctamente');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="formulario-container">
            <h2>Deja tu reseña:</h2>
            <form onSubmit={handleSubmit}>
                <div className="formulario-field">
                    <label>Tu valoración:</label>
                    <Rating value={rating} onChange={handleRatingChange} />
                </div>
                <div className="formulario-field">
                    <label>Tu comentario:</label>
                    <textarea value={comment} onChange={handleCommentChange} /> 
                </div>
                
                <div className="formulario-boton">
                    <button type="submit">Enviar reseña</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioReseñas;
