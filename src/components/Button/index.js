import React from "react"
import { Wrapper } from "./Button.styles"

const Button = ({ text, callback }) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default Button