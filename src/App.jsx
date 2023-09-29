import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Fetchapi from './api/Fetchapi';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Fetchapi />
    </>
  );
}

export default App;
