import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Presentation = () => {
  return (
    <>
    <div className="seccion_busqueda" id="seccion_busqueda">  
      {/* <!-- Swiper --> */}
      <div className="swiper mySwiper">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000, // Intervalo de tiempo en milisegundos (3 segundos)
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga1.jpg" alt="Málaga 1" />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga2.jpeg" alt="Málaga 2" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga3.jpeg" alt="Málaga 3" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga4.jpg" alt="Málaga 4" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga5.jpg" alt="Málaga 5" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga6.jpg" alt="Málaga 6" />
                </SwiperSlide>
            </Swiper>
        
        {/* <!-- <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> -->
        <!-- <div className="swiper-pagination"></div> --> */}
      </div>

      <div className="menu_busqueda">
        <form action="">
          <label for="opciones">Que quieres hacer</label>
          <select name="opciones" id="opciones">
            <option value="viajes">viajes</option>
            <option value="restaurantes">restaurantes</option>
            <option value="hoteles">hoteles</option>
          </select>
          <input type="text" name="palabra_clave" id="palabra_clave"/>
          <input type="submit" value="Buscar"/>
        </form>
      </div>
  </div>
    </>
  )
}

export default Presentation