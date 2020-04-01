import React from "react";
import YtsTitle from "../YtsTitle/ytsTitle";
import VpnSection from "../VPNSection/vpnSection";
import LatestMovies from "../LatestMovies/LatestMovies";
import Upcoming from "../Upcoming/Upcoming";
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
