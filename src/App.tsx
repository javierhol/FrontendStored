import React from 'react';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
   <>
   <Routes>

    <Route path='*' element="Esta ruta no existe"/>
    <Route path='/hola' element="Esta ruta si existe"/>
    <Route path='/login' element="el formulario"/>
   </Routes>

   </>
  );
}

export default App;
