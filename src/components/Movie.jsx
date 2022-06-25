import React from "react"
import { useParams } from "react-router-dom"
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../API"
import { useMovieFetch } from "../hooks/useMovieFetch"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Progress from "./Progress"

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
    </React.Fragment>
  )
}

export default Movie