import React from "react";

/* IMPORT COMPONENTS */
import { YtsTitle, VpnSection, LatestMovies, Upcoming } from "../../components";

const Home = () => {
  return (
    <>
      <YtsTitle />
      <VpnSection />
      <LatestMovies />
      <Upcoming />
    </>
  );
};

export default Home;
