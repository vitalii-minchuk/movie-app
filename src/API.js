const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

export const API = {
  fetchData: async () => {
    const response = await fetch(POPULAR_BASE_URL)
    const data = await response.json()

    return  await data.results
  }
}