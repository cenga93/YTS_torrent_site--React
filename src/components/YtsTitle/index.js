import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Grid3 } from "..";
import { fetchData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import rcc from "../../assets/img/rss-icon.webp";
import "./ytsTitle.scss";

const api = { sort: `download_count`, limit: 4 };
const { sort, limit } = api;

const YtsTitle = ({ className }) => {
  const [mostPopular, setMostPopular] = useState([]);
  useEffect(() => {
    const fetchMostPopular = async () => {
      const { data } = await fetchData(sort, limit);
      setMostPopular([...data.movies]);
    };
    fetchMostPopular();
  }, []);

  return (
    <Wrapper className={className}>
      <h1>Download YTS YIFY movies: HD smallest size</h1>
      <p>
        Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in <br /> excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies
        Torrents.
      </p>
      <Link to="/blog" className="blogLink">
        IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
      </Link>
      <h5>
        <FontAwesomeIcon icon={faStar} size="sm" className="starIcon" />
        Popular Downloads
        <Link to="/rss-guide" className="float-right">
          <img src={rcc} alt="rcc" />
        </Link>
      </h5>
      <Grid3 movie={mostPopular} />
    </Wrapper>
  );
};

export default YtsTitle;
