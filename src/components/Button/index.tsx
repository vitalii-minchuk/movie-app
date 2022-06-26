import React from "react"
import { Wrapper } from "./Button.styles"

type ButtonProps = {
  text: string
  callback: () => void
}

const Button: React.FC<ButtonProps> = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  )
}

export default Button