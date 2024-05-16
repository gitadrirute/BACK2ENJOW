import React, { useState } from 'react';
import Rating from './Rating';

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

            // Manejo exitoso de la respuesta del servidor
            console.log('Reseña enviada correctamente');
            // Aquí puedes realizar otras acciones, como mostrar un mensaje de éxito o redirigir al usuario.
        } catch (error) {
            console.error('Error:', error);
            // Aquí puedes manejar el error, como mostrar un mensaje al usuario.
        }
    };

    return (
        <div>
        {/*     ARREGLAR ESTOOO  OJOOOOOO  */}
            <h2>Deja tu reseña:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tu valoración:</label>
                    <Rating value={rating} onChange={handleRatingChange} />
                </div>
                <div>
                    <label>Tu comentario:</label>
                    {/* <textarea value={comment} onChange={handleCommentChange} /> */}
                </div>
                <button type="submit">Enviar reseña</button>
            </form>
        </div>
    );
}

export default FormularioReseñas;