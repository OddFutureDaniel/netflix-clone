import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import useMediaQuery from "./useMediaQuery";

function App() {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className="app">
    {/* {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>} */}
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
