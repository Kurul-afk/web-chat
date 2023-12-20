import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import "./App.css";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routers />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
