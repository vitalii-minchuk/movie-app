import React from "react"
import { API } from "../API"

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const fetchMovies = async () => {
    try {
      setIsLoading(true)
      console.log(await API.fetchData())
      setIsLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  React.useEffect(() => {
    fetchMovies()
  }, [])

  return(
    <>
      <button>ok</button>
    </>
  )
}

export default Home