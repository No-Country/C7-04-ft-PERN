import { useForm } from "react-hook-form";
import { authLogin } from "src/services/auth";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const login = authLogin(data)
      .then(data => data.json())
      .then(json => console.log(json))
    // console.log(login.then(data => console.log(data)))
  }

  return (
    <div className="login-form">
      <div className="login-form-head">
        <h2>Inicia sesión</h2>
        <p>¡Bienvenido al mercado NFT No-Coin!</p>  
      </div>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input 
            type="text" 
            name="email"
            placeholder="Su Email"
            {...register("email", {
              required: true
            })}
          />
          {errors.email?.type === 'required' && <p className="form-error">Ingrese su email</p>}
        </label>
        <label htmlFor="password">
          <input 
            type="password"
            name="password" 
            placeholder="Su contraseña"
            {...register("password" ,{
              required: true
            })}
          />
          {errors.email?.type === 'required' && <p className="form-error">Ingrese su contraseña</p>}
        </label>
        <div className="login-form-foot">
          <button>Iniciar sesión</button>
        </div>
      </form>
    </div>
  )
}

export default Login