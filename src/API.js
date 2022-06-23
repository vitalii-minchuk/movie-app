const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/"
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = "w1280"
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780"

export const API = {
  fetchData: async (page) => {
    const response = await fetch(`${POPULAR_BASE_URL}&page=${page}`)
    const data = await response.json()

    return await data
    
  }
}