import React from 'react';
import TablaUsuarios from './componentes/TablaUsuarios';
import TablaNegocios from './componentes/TablaNegocios';
import './styles/style.css';
import './styles/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <TablaUsuarios />
      <TablaNegocios />
    </div>
  );
}

export default App;
