import React from "react"
import { Content, Text, Wrapper } from "./HeroImage.styles"

type HeroImageProps = {
  image: string
  title: string
  text: string
}

const HeroImage: React.FC<HeroImageProps> = ({ image, title, text}) => {

  return(
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default HeroImage