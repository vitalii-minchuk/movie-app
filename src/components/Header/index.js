import React from "react"
import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.styles"
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="rndb-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tndb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header



