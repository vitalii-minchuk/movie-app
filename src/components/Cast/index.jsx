import React from "react"
import { Image, Wrapper } from "./Cast.styles"

const Cast = ({ name, character, imageUrl }) => {
  return(
    <Wrapper>
      <Image src={imageUrl} alt="actor" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

export default Cast