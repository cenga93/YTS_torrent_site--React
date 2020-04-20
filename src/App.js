import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* IMPORT COMPONENTS */
import { Header, Home, Footer, SocialIcons, BrowseMovie, MovieDetails } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SocialIcons />
      <Route path="/MovieDetails/:movieID" component={MovieDetails} />
      <Route exact path="/browse-movies" component={BrowseMovie} />
      <Route exact path="/" component={Home} />
      <Footer className="footer pt-4 shadow" />
    </BrowserRouter>
  );
};

export default App;
