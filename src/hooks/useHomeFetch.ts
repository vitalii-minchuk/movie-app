import { useEffect, useState } from "react"
import { API } from "../API"
import { isPersistedState } from "../helpers"
import { MovieType, ResponseDataType } from "../react-app-env"

const initialState = {
  results: [] as MovieType[],
  page: 0,
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [state, setState] = useState<ResponseDataType>(initialState)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const fetchMovies = async (page: number, searchTerm: string = "") => {
    try {
      setIsLoading(true)
      const movies = await API.fetchData(page, searchTerm)
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
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState")

      if (sessionState) {
        setState(sessionState)
        return;
      }
    }
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  useEffect(() => {
    if (!isShowMore) return;
    fetchMovies(state.page + 1, searchTerm)
    setIsShowMore(false)
  }, [isShowMore, state.page, searchTerm])

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
  }, [searchTerm, state])


  return { state, error, isLoading, setSearchTerm, searchTerm, setIsShowMore }
}

