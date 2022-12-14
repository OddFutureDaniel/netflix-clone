import { useEffect, useState } from "react";
import React from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

//   console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className=" banner__contents">
        <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner__buttons">
            <button className="banner__button__play">Play</button>
            <button className="banner__button__info">More Info</button>
        </div>
        <h1 className="banner__description">   
            {movie.overview}
             </h1>
      </div>
      <div className="banner__fadebutton"></div>
    </header>
  );
}

export default Banner;
