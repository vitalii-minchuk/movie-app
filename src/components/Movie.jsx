import React from "react"
import { useParams } from "react-router-dom"
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../API"
import { useMovieFetch } from "../hooks/useMovieFetch"
import BreadCrumb from "./BreadCrumb"
import Progress from "./Progress"

const Movie = () => {
  const { movieId } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieId)


console.log(movie);
  if (loading) return <Progress />

  if (error) return <div>Something went wrong ...</div>
  
  return(
    <>
    <BreadCrumb title={movie.original_title} />
      {/* <img src={movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : ""} alt="movie poster" /> */}
    </>
  )
}

export default Movie