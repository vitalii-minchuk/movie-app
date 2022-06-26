const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`
const MOVIE_BASE_URL = (id) => `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
const CREDITS_BASE_URL = (id) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/"

export const BACKDROP_SIZE = "w1280"

export const POSTER_SIZE = "w780"

export const API = {
  fetchData: async (page, searchTerm) => {

    const endPoint = searchTerm;
    const response = endPoint
      ? await fetch(`${SEARCH_BASE_URL}${searchTerm}&page=${page}`)
      : await fetch(`${POPULAR_BASE_URL}&page=${page}`)
    const data = await response.json()

    return data
    
  },
  fetchMovie: async (id) => {
    if(!id) return
    const response = await fetch(MOVIE_BASE_URL(id))
    const data = await response.json()

    return data
  },
  fetchCredits: async (id) => {
    const response = await fetch(CREDITS_BASE_URL(id))
    const data = await response.json()

    return data
  }
}