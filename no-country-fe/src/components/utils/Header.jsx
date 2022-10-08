import React from 'react'

const Header = () => {
  return (
    <header className='header-nav'>
      <div className='header-nav--search'>
        <input type="text" placeholder='Buscar articulo'/>
      </div>
      <div className='header-nav--controls'> 
        <label className="switch">
          <input type="checkbox" />
          <span className="slide"></span>
        </label>
        <button>Registro</button>
        <button>Inicar Sesión</button>
        <button>CONNECT WALLET</button>
      </div>
    </header>
  )
}

export default Header;
