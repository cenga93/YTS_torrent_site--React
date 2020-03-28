import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import stranica2 from "./components/stranica2/stranica2";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/stranica2" component={stranica2} />
    </BrowserRouter>
  );
};

export default App;
