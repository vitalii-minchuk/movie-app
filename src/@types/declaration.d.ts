export type MovieType = {
  id: number
  backdrop_path: string
  poster_path: string
  title: string
  popularity: number
  original_title: string
  overview: string
  vote_average: number
  vote_count: number
  budget: number
  runtime: number
  revenue: number
}

export type ResponseDataType = {
  results: Array<MovieType>
  page: number
  total_pages: number
  total_results: number
}

export type CastType = {
  character: string
  credit_id: string
  name: string
  profile_path: string
}

export type CrewType = {
  job: string
  name: string
  credit_id: number
}

export type Credits = {
  id: number
  cast: Array<CastType>
  crew: Array<CrewType>
}

declare global {
  interface Window {
    MyVendorThing: MyVendorType;
  }
}

declare module "*.png" {
  export default "" as string;
}

declare module "*.jpg" {
  export default "" as string;
}

declare module "*.svg" {
  export default "" as string;
}

