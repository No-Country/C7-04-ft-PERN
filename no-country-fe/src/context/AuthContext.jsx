import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    id: '',
    username: '',
    email: '',
    role: '',
    token: ''
  });
     
  return (
    <>
      <AuthContext.Provider value={{authUser, setAuthUser}}>
          {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthContext, AuthProvider };