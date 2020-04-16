import React from "react";
/* 
-----------------------------------
* -----  IMPORT COMPONENTS -----
-----------------------------------
*/
import { YtsTitle, VpnSection, LatestMovies, Upcoming } from "..";

const Home = () => {
  return (
    <>
      <YtsTitle className="ytsTitle" />
      <VpnSection className="vpn_section shadow" />
      <LatestMovies className="latest_movies shadow" />
      <Upcoming className="upcoming shadow" />
    </>
  );
};

export default Home;
