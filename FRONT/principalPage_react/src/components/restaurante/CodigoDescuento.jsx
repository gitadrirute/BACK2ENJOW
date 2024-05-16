import React, { useState } from 'react';
import '../../assets/css/GenerarCodigo.css'; // Importa el archivo CSS


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
    <>
    <div className="contenedor_descuento">
      <button onClick={generarCodigo} disabled={mostrarCodigo} className="btnCodigo">
        <div className="contenido_descuento"> {/* Asegúrate de que este contenedor use flexbox */}
          <img src="/img/restaurante/porcentaje1.jpg" alt="Descuento"/>
          <div>
            <p className="info_descuento">
              Obtén hasta un<br/>
              <span className="font-bold">20% de descuento</span>
            </p>
          </div>
        </div>
      </button>

      {mostrarCodigo && (
        <div className="contenedorCodigo">
          <h3>Código de Descuento:</h3>
          <p className="codigoDescuento">{codigo}</p>
        </div>
      )}
    </div>

    </>
  );
}

export default GeneradorCodigo;