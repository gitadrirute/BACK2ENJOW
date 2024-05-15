import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link, useNavigate } from 'react-router-dom';


const Presentation = () => {
  const navigate = useNavigate();

  // Función para manejar el desplazamiento suave a una sección específica
  const handleRedirectTo = (id) => {
      // Redirige a la página principal con un fragmento de ID
      navigate(`/#${id}`);

      // Agrega un retraso antes de desplazarte a la sección para asegurar que la redirección se complete
      setTimeout(() => {
          // Encuentra la sección de destino por su ID
          const targetSection = document.getElementById(id);

          // Desplázate suavemente a la sección de destino
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth',
              });
          }
      }, 0);
  };
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
            <option value="restaurantes">
              <Link to="/restaurante" onClick={() => handleRedirectTo('product')}>
                  Inicio
              </Link>
            </option>
            <option value="hoteles">hoteles</option>
          </select>
          <input type="submit" value="Buscar"/>
        </form>
      </div>
  </div>
    </>
  )
}

export default Presentation