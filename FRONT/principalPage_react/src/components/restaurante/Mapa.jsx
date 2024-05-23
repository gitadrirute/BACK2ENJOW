import React from 'react';

const MapCardComponent = () => {
  return (
    <div className="container">
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '500px' }}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1V7zWKH3Msh96j4Q-A-H4NWnkAEf4QcY&ehbc=2E312F"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default MapCardComponent;