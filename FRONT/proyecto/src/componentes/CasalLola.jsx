import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./CasalLola.css";
import GeneradorCodigo from './CodigoDescuento';
import FormularioReseñas from './FormularioReseñas';

const CasaLola = () => {
  const [activeTab, setActiveTab] = useState('descripcion');

  return (
    <div className="restaurant-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('descripcion')} className={activeTab === 'descripcion' ? 'active' : ''}>Descripción</button>
        <button onClick={() => setActiveTab('menu')} className={activeTab === 'menu' ? 'active' : ''}>Menú</button>
        <button onClick={() => setActiveTab('opiniones')} className={activeTab === 'opiniones' ? 'active' : ''}>Opiniones</button>
      </div>
      
      {activeTab === 'descripcion' && (
        <div>
          <h3>Casa Lola</h3>
          <p>📍 C. Duque de la Victoria, 3. 29015 Málaga</p>
          <p>🍴 Mediterráneo</p>
          <p>💵 Precio medio 15 €</p>
            
          
          
        </div>
      )}
      {activeTab === 'menu' && <div><h3>Menú</h3><p>Contenido del menú</p></div>}
      {activeTab === 'opiniones' && <div><h3>Opiniones</h3><p>Contenido de opiniones</p></div>}
      <GeneradorCodigo/>
      <FormularioReseñas/>
    </div>

  );
}

export default CasaLola;
