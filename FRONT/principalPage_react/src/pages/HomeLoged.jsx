import React from 'react'
import RestaurantSection from './UsuarioRegistrado/RestaurantSection'
import '../assets/css/RestaurantCard.css';
import '../assets/css/RestaurantHome.css';
import Presentation from '../components/Presentation';
import Budget from '../components/Budget';
import FaqSection from '../components/FaqSection';
import ContactUs from '../components/ContactUs';
import HotelSection from './UsuarioRegistrado/HotelSection';

const HomeLoged = () => {
    //Pagina principal
    //Usuario ha iniciado sesion
  return (
    <>
      <Presentation></Presentation>
      <RestaurantSection city={"Malaga"}/>
      <HotelSection city={"Malaga"}/>
      <Budget></Budget>
      <FaqSection></FaqSection>
      <ContactUs></ContactUs>
    </>
  )
}

export default HomeLoged