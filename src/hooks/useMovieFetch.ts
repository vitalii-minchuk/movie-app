import { useCallback, useEffect, useState } from "react"
import { API } from "../API"
import { MovieState } from "../declaration"


export const useMovieFetch = (movieId: number) => {
  const [state, setState] = useState<MovieState>({} as MovieState)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

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