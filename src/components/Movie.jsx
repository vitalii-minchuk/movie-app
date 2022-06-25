import React from "react"
import { useParams } from "react-router-dom"
import { useMovieFetch } from "../hooks/useMovieFetch"
import Cast from "./Cast"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Progress from "./Progress"
import Grid from "./Grid"
import { IMAGE_BASE_URL, POSTER_SIZE } from "../API"
import NoImage from "../images/no_image.jpg"

const Movie = () => {
  const { movieId } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieId)
  
  

  if (loading) return <Progress />

  if (error) return <div>Something went wrong ...</div>
  
  return(
    <React.Fragment>
      <BreadCrumb title={movie.original_title} />
      <MovieInfo movie={movie} movieId={movieId} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header={"Cast"}>
        {movie.actors?.map((actor) => (
          <Cast
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
            }
          />
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default Movie