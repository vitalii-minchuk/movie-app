import React from "react"
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../API"
import { useHomeFetch } from "../hooks/useHomeFetch"
import NoImg from "../images/no_image.jpg"
import Button from "./Button"
import Card from "./Card"
import Grid from "./Grid"
import HeroImage from "./HeroImage"
import Progress from "./Progress"
import SearchBar from "./SearchBar"

const Home = () => {
  const { state, error, isLoading, setSearchTerm, searchTerm } = useHomeFetch()
  const movie = state.results[10]

  if(error) {return (<div>Eror</div>)}

  return (
    <>
      {!searchTerm && movie
        ? <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
            title={movie.original_title}
            text={movie.overview}
          />
        : null
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      {isLoading &&
        <Progress />
      }
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map(movie => (
          <Card
            key={movie.id}
            clickable={true}
            movieId={movie.id}
            image={movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImg
            }
          >
            {movie.title}
          </Card>
        ))}
      </Grid>
      <Button text="Show more" />
      
    </>
  )
}

export default Home