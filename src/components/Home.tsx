import React from "react"
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../API"
import { getRandomNumber } from "../helpers"
import { useHomeFetch } from "../hooks/useHomeFetch"
//@ts-ignore
import NoImg from "../images/no_image.jpg"
import Button from "./Button"
import Card from "./Card"
import Grid from "./Grid"
import HeroImage from "./HeroImage"
import Progress from "./Progress"
import SearchBar from "./SearchBar"
import Slide from "./Slide"

const Home: React.FC = () => {
  const { state, error, isLoading, setSearchTerm, searchTerm, setIsShowMore } = useHomeFetch()

  const movie = state.results[getRandomNumber()]
 
  if(error) return <div>Something went wrong ...</div>

  return (
    <React.Fragment>
      {!searchTerm && movie
        ? <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
            title={movie.original_title}
            text={movie.overview}
          />
        : null
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      {isLoading && <Progress />}

      {!searchTerm && movie
        ? <Slide header={"Top 10 This Week"}>
          {state?.results?.slice(0, 10).map(movie => (
            <Card
              key={movie.id}
              clickable={true}
              movieId={movie.id}
              image={movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImg
              }
            >
            </Card>
            ))
          }
        </Slide>
        : null
      }
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map(movie => (
          <Card
            key={movie.id}
            clickable
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
      {isLoading
        ? <Progress />
        : <Button text="Load more" callback={() => setIsShowMore(true)} />
      }
    </React.Fragment>
  )
}

export default Home