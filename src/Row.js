import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row poster*/}

        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />

              <div className="movie__Name">
                {isLargeRow ? null : <h3>{movie.title}{movie.name}</h3>}
              </div>

              {/* <h2>Another heading</h2> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
