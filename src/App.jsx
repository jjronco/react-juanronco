import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div style={{ backgroundColor: '#101010', minHeight: '100vh' }}>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a Juan Ronco, consultoría en comunicación estratégica y diseño web" />
    </div>
  );
};

export default App;
