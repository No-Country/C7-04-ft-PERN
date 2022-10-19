const Collections = () => {
  return (
    <div className="collections">
      <div className="collections-title">
        <h4>Colecciones</h4>
        <h3>Destacadas</h3>
        <button>Seleccionados para ti</button>
        <p>Conoce nuestras colecciones con gran potencial, curadas por nosotros y la comunidad</p>
      </div>
      <div className="collections-slide">
        <h2>NOMBRE DE LA COLECCION AQUI</h2>
        <span>de @user</span>
        <div className="collections-slide--controlls">
          <button>-</button>
          <button>-</button>
          <button>-</button>
          <button>-</button>
        </div>
      </div>
      <div className="collections-table">
        <div className="collections-table-controlls">
          <button>Todas las categorias</button>
          <button>24 hs</button>
        </div>
        <div className="collections-table-titles">
          <span>Top colecciones</span>
          <span>Top creadores</span>
        </div>
        <div className="collections-table-body">

        </div>
      </div>
    </div>
  )
}

export default Collections