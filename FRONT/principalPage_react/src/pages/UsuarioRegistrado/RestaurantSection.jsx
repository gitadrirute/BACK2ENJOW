import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from './RestaurantCard';
import { useNavigate } from "react-router-dom";

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/restaurantes");
  };

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/listadoHosteleriaTF');
        const data = await response.json();
        // Ordenar los restaurantes por puntuación y seleccionar los 3 mejores
        const topRestaurants = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setRestaurants(topRestaurants);
      } catch (error) {
        console.error('Error al obtener los datos de la API', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <br /><br />
      <div onClick={handleTitleClick} className="container">
        <div className="label-container">
          <h2>Restaurantes</h2>
        </div>
        <div className="card-slider" ref={restaurantContainerRef}>
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              imageSrc={restaurant.imageSrc}
              discount={restaurant.discount}
              name={restaurant.name}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              description={restaurant.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantSection;
