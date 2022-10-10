const API_KEY = "c3a2889ccfc714fecbe6e62dca0afa5d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-UK`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-UK&page=1`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-UK`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
