import { Credits, MovieType, ResponseDataType } from "./react-app-env";

declare const process: {
  env: {
    [key: string]: string;
  }
}

const API_URL: string = "https://api.themoviedb.org/3/"
const API_KEY = process.env.REACT_APP_API_KEY

const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`
const MOVIE_BASE_URL = (id: number): string => `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
const CREDITS_BASE_URL = (id: number): string => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`

export const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/"
export const BACKDROP_SIZE: string = "w1280"
export const POSTER_SIZE: string = "w780"

export const API = {
  fetchData: async (page: number, searchTerm: string): Promise<ResponseDataType> => {
    const endPoint: string = searchTerm;
    const response = endPoint
      ? await fetch(`${SEARCH_BASE_URL}${searchTerm}&page=${page}`)
      : await fetch(`${POPULAR_BASE_URL}&page=${page}`)

    return await response.json()
  },
  fetchMovie: async (id: number): Promise<MovieType> => {
    const response = await fetch(MOVIE_BASE_URL(id))
    
    return await response.json()
  },
  fetchCredits: async (id: number): Promise<Credits> => {
    const response = await fetch(CREDITS_BASE_URL(id))
    
    return await response.json()
  }
}