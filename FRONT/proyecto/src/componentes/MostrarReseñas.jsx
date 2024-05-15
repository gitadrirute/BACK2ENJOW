import React, { useState, useEffect } from 'react';

function FormularioReseñas() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET para obtener los comentarios
        fetch('/API')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, []); // Ejecutar solo una vez al montar el componente

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {FormularioReseñas.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <p>Autor: {comment.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormularioReseñas;