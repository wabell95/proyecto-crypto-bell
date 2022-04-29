import React from 'react';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="container">
     <h3>Bienvenido a Bell-crypto!</h3>
     <Navbar></Navbar> 
     <ItemCount></ItemCount>
     
    </div>
  );
}

export default App;


