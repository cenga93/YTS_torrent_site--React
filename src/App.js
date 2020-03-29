import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./components/Header/header";
import Home from "./components/Home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
