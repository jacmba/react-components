import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children, initialLoggedInUser }) => {
  const [loggedUser, setLoggedUser] = useState(initialLoggedInUser);
  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
