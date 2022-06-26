import React from "react"
import { Content, Wrapper } from "./Slide.styles"

type SlideProps = {
  header: string
  children?: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({header, children}) => {
  return(
    <Wrapper>
      <h1>{header}</h1>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Slide