import React from "react"
import { Link } from "react-router-dom"
import { Image } from "./Card.styles"

type CardProps = {
  image: string
  movieId: number
  clickable: boolean
}

const Card: React.FC<CardProps> = ({ image, movieId, clickable }) => {
  return (
    clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-poster" />
      </Link>
    ) : (
      <Image src={image} alt="movie-poster" />
    )
    
  )
}

export default Card