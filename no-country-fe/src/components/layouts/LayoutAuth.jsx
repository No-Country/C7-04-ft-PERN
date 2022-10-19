const LayoutAuth = ( {children} ) => {
  return (
    <div className="layout-auth">
      <div className="layout-auth--title">
        <h2>El mercado NFT mas seguro y variado</h2>
        <div>
          <p>Obtén acceso a todo el calendario de lanzamientos.</p>
          <p>Conviértete en miembro de la comunidad.</p>
          <p>Crea tu portafolio de colecciones</p>
        </div>
      </div>
      <div className="layout-auth--form">
        {children}
      </div>
    </div>
  )
}

export default LayoutAuth