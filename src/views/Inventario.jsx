import React from 'react';

function Inventario() {

  const hundleClick = () => {
    localStorage.removeItem('secure_token');
    localStorage.removeItem('perfil_rol');
    localStorage.removeItem('auth_cuenta');
    localStorage.removeItem('response_auth');
    window.location.href = '/login';
  }
  return (
    <div>
     <h1>Inventario</h1>
     <button onClick={hundleClick}>
      Cerrar sesión
     </button>

    </div>
  );
}

export default Inventario;
