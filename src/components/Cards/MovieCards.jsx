import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./MovieCards.css";
import { Box } from "@mui/system";
import { AuthContext } from "../../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

export default function MovieCards({
  poster_path,
  title,
  overview,
  vote_average,
  id,
}) {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <Box className="Cards">
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={poster_path ? IMG_API + poster_path : defaultImage}
            alt={title}
          />
          <CardContent>
            <Typography
              sx={{ height: "2rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>

            <Typography
              className="overview"
              variant="body1"
              color="text.primary"
              classes="overview"
            >
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Movie Detail</Button>
          {currentUser ? (
            <Typography
              variant="h4"
              color="primary"
              sx={{ marginLeft: "auto" }}
            >
              {vote_average}
            </Typography>
          ) : (
            <Typography variant="p" color="primary" sx={{ marginLeft: "auto" }}>
              Movie Point -
            </Typography>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
// onClick={()=>getMovieDetails(id,navigate,title)}
