
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const login = async (email, password) => {
    setAuthState({ ...authState, loading: true });

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setAuthState({
          isAuth: true,
          loading: false,
          error: null,
          token: data.token,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setAuthState({
        ...authState,
        loading: false,
        error: err.message,
      });
    }
  };

  const logout = () => {
    setAuthState({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
