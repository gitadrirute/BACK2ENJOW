import React, { useState } from 'react';
import './GenerarCodigo.css'; // Importa el archivo CSS
import porcentaje from "./assets/porcentaje1.jpg";

const GeneradorCodigo = () => {
  const [codigo, setCodigo] = useState(null);
  const [mostrarCodigo, setMostrarCodigo] = useState(false);

  // Función para generar el código de descuento
  const generarCodigo = () => {
    if (!mostrarCodigo) {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let codigoAleatorio = '';

      // Generar las letras aleatorias
      for (let i = 0; i < 3; i++) {
        codigoAleatorio += letras.charAt(Math.floor(Math.random() * letras.length));
      }

      // Generar los números aleatorios
      for (let i = 0; i < 3; i++) {
        codigoAleatorio += Math.floor(Math.random() * 10);
      }

      setCodigo(codigoAleatorio);
      setMostrarCodigo(true); // Mostrar el código generado
    }
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
      {/* Botón para generar el código */}
      <button onClick={generarCodigo} disabled={mostrarCodigo} className="w-full flex items-center">
        <div className="img-container">
          {/* Utiliza la etiqueta <img> para mostrar la imagen */}
          <img src={porcentaje} alt="Porcentaje" />
        </div>
        <div className="ml-3 text-container">
          {/* Utiliza la propiedad white-space para permitir el salto de línea */}
          <p className="text-lg font-semibold text-zinc-900 dark:text-white" style={{ whiteSpace: 'pre-wrap' }}>
            <span>Obtén hasta un</span><br/>
            <span className="font-bold">20 %</span> de descuento
          </p>
        </div>
      </button>

      {/* Mostrar el cuadro con el código generado */}
      {mostrarCodigo && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Código de Descuento:</h3>
            <p className="text-xl font-bold">{codigo}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneradorCodigo;
