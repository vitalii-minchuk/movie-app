
import React from "react"
import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.styles"
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to={"/"} >
          <LogoImg src={RMDBLogo} alt="rndb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tndb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header



