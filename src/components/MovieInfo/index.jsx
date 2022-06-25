import React from "react"
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../API"
import Card from "../Card"
import { Content, Text, Wrapper } from "./MovieInfo.styles"

import NoImage from "../../images/no_image.jpg"

const MovieInfo = ({ movie, movieId }) => {

  const image = movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : NoImage
  return (
    <Wrapper backdrop={image}>
      <Content>
        <Card  image={image}
          movieId={movieId}
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="description"> 
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="directors">
              <h3>DIRECTOR{movie.directors?.length > 1 ? "S" : ""}</h3>
              {movie.directors?.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo