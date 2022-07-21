import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import MovieCards from "../components/Cards/MovieCards";
import axios from "axios";
import { ImageListItem } from "@mui/material";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            mt: 3,
          }}
        >
          <TextField fullWidth label="Search Movie" id="fullWidth" />
        </Box>
      </Container>

      {loading ? (
        <ImageListItem>
          <img src="../assets/loading.gif" alt="loadinggif" loading="lazy" />
        </ImageListItem>
      ) : (
        movies?.map((movie) => <MovieCards key={movie.id} {...movie} />)
      )}
    </>
  );
};

export default Home;
