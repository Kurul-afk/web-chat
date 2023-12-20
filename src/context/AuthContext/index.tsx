import React, { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const INIT_VALUE = {
  email: "",
  password: "",
  image: "",
};

// context

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

// firebase

const app = initializeApp({
  apiKey: "AIzaSyA8PNnBsYfx5cAF2npfUbj0d3VYJubFUKI",
  authDomain: "web-chat-c1c54.firebaseapp.com",
  projectId: "web-chat-c1c54",
  storageBucket: "web-chat-c1c54.appspot.com",
  messagingSenderId: "229500222580",
  appId: "1:229500222580:web:7ff9b5ba121513200d2521",
  measurementId: "G-6QC3Q8DJ4Q",
});

const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState("");

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
