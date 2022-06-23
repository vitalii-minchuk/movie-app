import { useEffect, useState } from "react"
import { API } from "../API"

const initialState = {
  results: [],
  page: 0,
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page) => {
    try {
      setIsLoading(true)
      const movies = await API.fetchData(page)
      setState(prev => ({
      ...movies,
      results:
      page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
    }))
    setIsLoading(false)
    } catch (error) {
      setError(true)
    }
    
  }

  useEffect(() => {
    fetchMovies(2)
  }, [])

  return { state, error, isLoading }
}

