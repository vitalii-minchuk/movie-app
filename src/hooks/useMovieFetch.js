import { useCallback, useEffect, useState } from "react"
import { API } from "../API"


export const useMovieFetch = movieId => {
  const [state, setState] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)

      const movie = await API.fetchMovie(movieId)
      const credits = await API.fetchCredits(movieId)
      const directors = credits.crew.filter(member => {
         return member.department === "Directing"
      })

      setState({
        ...movie,
        actors: credits.cast,
        directors
      })
      setLoading(false)

    } catch (error) {
      setError(true)
    }
  }, [movieId])

  useEffect(() => {
    fetchMovie()
  }, [fetchMovie, movieId])

  return { state, error, loading }
}