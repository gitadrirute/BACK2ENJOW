import React, { useState } from 'react';
import "../../assets/css/CasalLola.css";
import GeneradorCodigo from './CodigoDescuento';
import FormularioReseñas from './FormularioReseñas';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const CasaLola = () => {
  const [activeTab, setActiveTab] = useState('descripcion');

  return (
  <>
  {/* <!-- Swiper --> */}
  <div className="swiper mySwiper">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000, // Intervalo de tiempo en milisegundos (3 segundos)
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper">
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga1.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 1" />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga2.jpeg" style={{ width: '80%', height: '200px' }} alt="Málaga 2" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga3.jpeg" style={{ width: '80%', height: '200px' }} alt="Málaga 3" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga4.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 4" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga5.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 5" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga6.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 6" />
                </SwiperSlide>
            </Swiper>

        {/* <!-- <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> -->
        <!-- <div className="swiper-pagination"></div> --> */}
      </div>
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
  </>
  );
}

export default CasaLola;
