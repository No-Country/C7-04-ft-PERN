const Register = () => {
  return (
    <div className="register">
      <div className="register-title">
        <h2>El mercado NFT mas seguro y variado</h2>
        <div>
          <p>Obtén acceso a todo el calendario de lanzamientos.</p>
          <p>Conviértete en miembro de la comunidad.</p>
          <p>Crea tu portafolio de colecciones</p>
        </div>        
      </div>
      <div className="register-form">
        <div className="register-form-head">
          <h2>Regístrate</h2>
          <p>¡Bienvenido al mercado NFT No-Coin!</p>
        </div>
        <form>
          <label htmlFor="username">
            <input 
              type="text" 
              name="username"
              placeholder="Nombre de Usuario"
            />
          </label>
          <label htmlFor="email">
            <input 
              type="text" 
              name="email"
              placeholder="Correo electrónico"
            />
          </label>
          <label htmlFor="password">
            <input 
              type="text" 
              name="password"
              placeholder="Contraseña"
            />
          </label>
          <label htmlFor="confirmPassword">
            <input 
              type="text" 
              name="confirmPassword"
              placeholder="Confirmar contraseña"
            />
          </label>
          <label htmlFor="acceptTerms">
            <input 
              type="checkbox" 
              name="acceptTerms"
            />
            Acepto los términos y condiciones
          </label>
        </form>
        <div className="register-form-foot">
          <button>Registrarme</button>
          <p>¿Ya tienes cuenta?</p>
        </div>
      </div>
    </div>
  )
}

export default Register