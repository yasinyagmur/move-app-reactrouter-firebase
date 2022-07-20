import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import MovieCards from "../components/Cards/MovieCards";

const Home = () => {
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
    <MovieCards/>
    </>
  );
};

export default Home;
