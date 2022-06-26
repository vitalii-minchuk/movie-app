import React from "react"
import { useParams } from "react-router-dom"
import { useMovieFetch } from "../hooks/useMovieFetch"
//@ts-ignore
import movieTrailer from "movie-trailer"
import Cast from "./Cast"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Progress from "./Progress"
import Grid from "./Grid"
import { IMAGE_BASE_URL, POSTER_SIZE } from "../API"
//@ts-ignore
import NoImage from "../images/no_image.jpg"
import Video from "./YouTube"
import { CastType } from "../declaration"

const Movie = () => {
  const [ trailerUrl, setTrailerUrl ] = React.useState("")
  const { movieId } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieId)

  const onPlay = () => {
      if(trailerUrl){
        setTrailerUrl("");
      }else{
        movieTrailer(movie?.original_title || movie?.title || " ")
        .then((url: string) => {
          const urlParams: any = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
        })
        .catch((error: string) => console.log(error));
      }
    }

  if (loading) return <Progress />

  if (error) return <div>Something went wrong ...</div>
  
  return(
    <React.Fragment>
      <BreadCrumb title={movie.original_title} />
      <MovieInfo movie={movie} movieId={movieId} onPlay={onPlay} trailerUrl={trailerUrl} />
      { trailerUrl && <Video videoId={trailerUrl}/>  }
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header={"Cast"}>
        {movie.actors.map((actor: CastType) => (
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