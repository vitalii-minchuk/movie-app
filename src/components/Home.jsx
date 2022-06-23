import React from "react"
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../API"
import { useHomeFetch } from "../hooks/useHomeFetch"
import NoImg from "../images/no_image.jpg"
import Grid from "./Grid"
import HeroImage from "./HeroImage"

const Home = () => {
  const { state, error, isLoading } = useHomeFetch()
  const movie = state.results[11]
console.log({ state, error, isLoading });

  return (
    <>
      {movie
        ? <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
            title={movie.original_title}
            text={movie.overview}
          />
        : null
      }
      <Grid header={isLoading ? "" : "Popular Movies"}>
        {state.results.map(movie => (
          <div>{movie.title}</div>
        ))}
      </Grid>
    </>
  )
}

export default Home