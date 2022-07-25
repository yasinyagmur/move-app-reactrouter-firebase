import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import VideoSection from "../components/Video/VideoSection";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [videoKey, setVideoKey] = useState();
  // const isActive = useMediaQuery("(max-width:600px)");

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div>
      <Card
        sx={{
          maxWidth: "65%",
          height: "auto",
          margin: "auto",
          marginTop: "2rem",
          marginBottom:"5rem",
          bgcolor: "#f4f2f2",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="400px"
            image={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt={title}
            sx={{ objectFit: "contain", marginTop: "2rem" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", padding: "2rem" }}
            >
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Overwiew
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Release Date : " + release_date}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Rate : " + vote_average}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Total Vote : " + vote_count}
            </Typography>
            {videoKey && <VideoSection videoKey={videoKey} />}
            <Link to={-1}>Go Back</Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MovieDetails;
