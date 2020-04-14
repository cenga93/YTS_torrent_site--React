import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* IMPORT COMPONENTS */
import { Header, Home, Footer } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer className={`footer pt-4 shadow`} />
    </BrowserRouter>
  );
};

export default App;
