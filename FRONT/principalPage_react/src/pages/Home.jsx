import React from 'react'
import Presentation from '../components/Presentation'
import CallUs from '../components/CallUs'
import Budget from '../components/Budget'
import FaqSection from '../components/FaqSection'
import ContactUs from '../components/ContactUs'
import NewsLetter from '../components/NewsLetter'
import '../assets/css/App.css';
import MeetUs from '../components/MeetUs'


//PAGINA PRINCIPAL
const Home = () => {
  return (
    <>
      <Presentation></Presentation>
      <MeetUs></MeetUs>
      <CallUs></CallUs>
      <Budget></Budget>
      <FaqSection></FaqSection>
      <ContactUs></ContactUs>
      <NewsLetter></NewsLetter>
      
    </>
  )
}

export default Home