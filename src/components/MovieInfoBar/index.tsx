import React from "react"
import { calcTime, convertMoney } from "../../helpers"
import { Content, Info, Wrapper } from "./MovieInfoBar.styles"

type MovieInfoBarProps = {
  time: number
  budget: number
  revenue: number
}

const MovieInfoBar: React.FC<MovieInfoBarProps> = ({ time, budget, revenue }) => {
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