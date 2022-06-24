import React from "react"
import { Image } from "./Card.styles"

const Card = ({ image, movieId, clickable }) => <Image src={image} alt="movie-poster" />

export default Card