import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

class SimpleMarkerMap extends Component {
  state = {
    restaurantes: [
      {
        nombre: 'Casa Lola',
        direccion: 'Pl. de Uncibay, 3',
        coordenadas: { lat: 36.720991, lng: -4.417784 } // Coordenadas de Casa Lola
      },
      {
        nombre: 'Venta El Túnel',
        direccion: 'Carretera, MA-3101, km 2, 29014',
        coordenadas: { lat: 36.78084, lng: -4.43533 } // Coordenadas de Venta El Túnel
      }
    ],
    activeMarker: {},
    selectedRestaurant: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      selectedRestaurant: props
    });
  };

  render() {
    const { restaurantes, activeMarker, selectedRestaurant } = this.state;

    return (
      <div>
      <div style={{ maxWidth: '100px', maxHeight: '100px' }}> {/* Ajustar tamaño del contenedor del mapa */}
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 36.720991, lng: -4.417784 }} // Centro en Casa Lola
        >
          {restaurantes.map(restaurante => (
            <Marker
              key={restaurante.nombre}
              title={restaurante.nombre}
              name={restaurante.nombre}
              position={restaurante.coordenadas}
              onClick={this.onMarkerClick}
            />
          ))}
          <InfoWindow
            marker={activeMarker}
            visible={activeMarker === activeMarker}
          >
            <div>
              <h3>{selectedRestaurant.name}</h3>
              <p>{selectedRestaurant.address}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBafd19kLZ5YVA76oDXwqv0jSa_r2QUCC0'
})(SimpleMarkerMap);
