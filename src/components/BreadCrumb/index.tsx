import React from "react"
import { Link } from "react-router-dom"
import { Content, Wrapper } from "./BreadCrumb.styles"

type BreadCrumbProps = {
  title: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
  return (
    <Wrapper>
      <Content>
        <Link to={"/"} >
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{title}</span>
      </Content>
    </Wrapper>
  )
}

export default BreadCrumb