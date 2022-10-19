import { URL } from "../services/config";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const authRegister = ({username, email, password}) => {
    const raw = JSON.stringify({
      "username": username,
      "email": email,
      "password": password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch(URL+'users', requestOptions)
}

const authLogin = ({email, password}) => {
    const raw = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return fetch(URL+'users/login', requestOptions)
}

export { authLogin, authRegister }; 