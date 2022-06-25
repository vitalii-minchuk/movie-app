import React from "react"
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../API"
import Card from "../Card"
import { Content, Image, Text, Wrapper } from "./MovieInfo.styles"

import NoImage from "../../images/no_image.jpg"
import Video from "../YouTube"
import ReactPlayer from "react-player"
import Button from "../Button"

const MovieInfo = ({ movie, movieId }) => {

  const trailer = movie.videos?.results.find(vid => vid.name === "Official Trailer")

  const image = movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : NoImage
  return (
    <Wrapper backdrop={image}>
      <Content>
        {/* <Video videoId={trailer?.key ? trailer.key : ""} /> */}

        {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer?.key}`}
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
          playing={true}
          width={"100%"}
          height={"100%"}
          style={{position: "absolute", maxHeight: "400px"}}
         /> */}

        {/* <ReactPlayer url={`https://www.youtube.com/embed/${trailer?.key}`} /> */}




        <Image src={image} alt="movie-poster" />
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
          <button>Play trailer</button>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo