import React, { useEffect, useState } from 'react';
import "../assets/css/Perfil.css";

function UserProfile() {
 {/* const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://tuapi.com/usuario');
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []);
*/}
  return (
    <div className="container33">
      <div id="logo" className="logo">
        
      </div>
      <div className="rightBox">
        <div className="profile">
          <h1 className='h11'>INFORMACIÓN PERSONAL</h1>
          <h2 className='h22'>Nombre</h2>
          <p>Julie Park {/*{userData.nombre}*/}</p>
          <h2 className='h22'>Apellidos</h2>
          <p>July 21 {/*{userData.apellidos}*/}</p>
          <h2 className='h22'>Email</h2>
          <p>Female {/*{userData.email}*/}</p>
          <h2 className='h22'>Contraseña</h2>
          <p>example@example.com {/*{userData.contraseña}*/}</p>
          
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
