import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* IMPORT COMPONENTS */
import { Header, Home, Footer, SocialIcons, BrowseMovie } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SocialIcons />
      <Route exact path="/" component={Home} />
      <Route exact path="/browse-movies" component={BrowseMovie} />
      <Footer className={`footer pt-4 shadow`} />
    </BrowserRouter>
  );
};

export default App;
