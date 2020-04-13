import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

/* IMPORT COMPONENTS */
import { Header, Home, Footer } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
