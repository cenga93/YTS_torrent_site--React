import React from "react";
import YtsTitle from "../YtsTitle/ytsTitle";
import VpnSection from "../VPNSection/vpnSection";
import LatestMovies from "../LatestMovies/LatestMovies";
import Upcoming from "../Upcoming/Upcoming";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <YtsTitle />
      <VpnSection />
      <LatestMovies />
      <Upcoming />
      <Footer />
    </>
  );
};

export default Home;
