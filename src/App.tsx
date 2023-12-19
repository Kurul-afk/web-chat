import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
