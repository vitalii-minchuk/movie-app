import React from "react"
import { Content, Wrapper } from "./Slide.styles"

const Slide = ({header, children}) => {
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