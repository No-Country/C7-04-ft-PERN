import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const validatorPassword = (value) => {
    const pass = document.querySelector('form').children[2].children[0].value
    return value === pass
  }

  const onSubmit = ({ username, email, password}) => {
    console.log(username, email, password);

    /*
    El codigo de esta peticion es sacado directamente de postman, donde si funciona perfectamente
    */
   
    // const myHeaders = new Headers();
    // // myHeaders.append("", "");
    // myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": "Beto",
      "email": "beto.bogino2@gmail.com",
      "password": "password123"
    });

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("https://nft-market-place-no-country.herokuapp.com/api/v1/users", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

     /**/
    
    /*
    La siguiente es una api montada en heroku, que toma la peticion y la hace por ti, para evitar el problema de los CORS, lo cual no paso jaja
    */
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const yourUrl = 'https://nft-market-place-no-country.herokuapp.com/api/v1/users';
      
    fetch(corsAnywhere + yourUrl, {
      method: 'POST',
      body: raw,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })

    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }

  return (
    <div className="register-form">
      <div className="register-form-head">
        <h2>Regístrate</h2>
        <p>¡Bienvenido al mercado NFT No-Coin!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <input 
            type="text" 
            name="username"
            placeholder="Nombre de Usuario"
            {...register("username", {
              required: true
            })}
            />
            {errors.username?.type === 'required' && <p className="form-error">El nombre de usuario es requerido</p>}
        </label>
        <label htmlFor="email">
          <input 
            type="text" 
            name="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email?.type === 'required' && <p className="form-error">El email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className="form-error">El email tiene un formato incorrecto</p>}
        </label>
        <label htmlFor="password">
          <input 
            type="password" 
            name="password"
            placeholder="Contraseña"
            {...register("password",{
              required: true,
              minLength: 8
            })}
          />
          {errors.password?.type === 'required' && <p className="form-error">La contraseña es requerida</p>}
          {errors.password?.type === 'minLength' && <p className="form-error">La contraseña debe tener como mínimo 8 caracteres</p>}
        </label>
        <label htmlFor="confirmPassword">
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword",{
              required: true,
              validate: validatorPassword
            })}
          />
          {errors.confirmPassword?.type === 'required' && <p className="form-error">Debe confimar su contraseña</p>}
          {errors.confirmPassword?.type === 'validate' && <p className="form-error">Las contraseñas no coinciden</p>}
        </label>
        <label htmlFor="acceptTerms">
          <input 
            type="checkbox" 
            name="acceptTerms"
            {...register("acceptTerms", {
              required: true
            })}
          />
          Acepto los términos y condiciones
          {errors.acceptTerms?.type === 'required' && <p className="form-error">Debe aceptar los términos y condiciones</p>}
        </label>
        <div className="form-foot">
          <button className="btn-submit">Registrarme</button>
          <p>¿Ya tienes cuenta?</p>
        </div>
      </form>
    </div>
  )
}

export default Register