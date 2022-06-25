import React from "react"
import { calcTime, convertMoney } from "../../helpers"
import { Content, Info, Wrapper } from "./MovieInfoBar.styles"

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <Info>
          <p>Running time: {calcTime(time)}</p>
        </Info>
        <Info>
          <p>Budget: {convertMoney(budget)}</p>
        </Info>
        <Info>
          <p>Revenue: {convertMoney(revenue)}</p>
        </Info>
      </Content>
    </Wrapper>
  )
}

export default MovieInfoBar