import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import MovieCards from "../components/Cards/MovieCards";
import axios from "axios";
import { Button, Grid, ImageListItem } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {  toastWarnNotify } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currentUser } = useContext(AuthContext);

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

  const handleSearchClick = () => {
    if (search && currentUser) {
      getMovies(SEARCH_API + search);
    } else {
      toastWarnNotify("Please enter the movie you want to search");
    }
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
          <TextField
            type="search"
            fullWidth
            label="Search Movie"
            id="fullWidth"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          sx={{
            border: "1px solid grey",
            height: "3.5rem",
            width: "7rem",
            mt: 3,
            marginLeft:"0.5rem"
          }}
          size="large"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {loading ? (
              <ImageListItem>
                <img
                  src="../assets/loading.gif"
                  alt="loadinggif"
                  loading="lazy"
                />
              </ImageListItem>
            ) : (
              movies?.map((movie) => <MovieCards key={movie.id} {...movie} />)
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
