import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  return (
    <AuthContext.Provider
      value={{ email, setEmail, name, setName, loggedIn, setLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
